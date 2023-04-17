import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { addToFavorites, removeFromFavorites } from '../../store/modules/favorites/reducer';
import QuizModal from '../QuizModal/QuizModal';
import { btnStyles } from '../../mui-customs/custom-styles';
import './QuizCard.css';

function QuizCard({ quiz }) {
  const { favorites } = useSelector((state) => state.favoritesReducer);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isFavorite, setIsFavorite] = useState(favorites.find((favQuiz) => favQuiz.id === quiz.id));
  function setFavorite() {
    // eslint-disable-next-line no-unused-expressions
    isFavorite ? dispatch(removeFromFavorites(quiz)) : dispatch(addToFavorites(quiz));
    setIsFavorite(!isFavorite);
  }
  const getQuizPath = () => `/quiz/${quiz.title.replaceAll(' ', '_').toLowerCase()}`;

  return (
    <Card className='card'>
      <CardMedia
        className='img'
        image={quiz.img}
        title={quiz.title}
      >
        {isFavorite ? <StarIcon onClick={setFavorite} /> : <StarOutlineIcon onClick={setFavorite} />}
      </CardMedia>
      <CardContent className='info'>
        <Typography
          className='title'
          gutterBottom
          variant="h5"
          component="div"
        >
          {quiz.title}
        </Typography>
        <Typography
          className='description'
          variant="body2"
          sx={{ height: '50px' }}
        >
          {quiz.description}
        </Typography>
      </CardContent>
      <CardActions className='buttons-wrapper'>
        <Link to={getQuizPath()}>
          <Button
            size="small"
            variant="outlined"
            sx={btnStyles}
          >
            Start
          </Button>
        </Link>
        <Button
          size='small'
          variant='outlined'
          sx={btnStyles}
          onClick={handleOpen}
        >
          Learn More
        </Button>
      </CardActions>
      <QuizModal
        open={open}
        handleClose={handleClose}
        quiz={quiz}
        isFavorite={isFavorite}
        setIsFavorite={setIsFavorite}
        getQuizPath={getQuizPath}
      />
    </Card>
  );
}

export default QuizCard;
