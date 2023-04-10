import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import QuizModal from '../QuizModal/QuizModal';
import './QuizCard.css';

const btnStyles = {
  color: 'white',
  borderColor: 'var(--main-alt)',
  '&:hover': {
    borderColor: 'var(--main)',
  },
};

function QuizCard({ quiz }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getQuizPath = () => `/quiz/${quiz.title.replaceAll(' ', '_').toLowerCase()}`;

  return (
    <Card className='card'>
      <CardMedia
        className='img'
        image={quiz.img}
        title={quiz.title}
      >
        <StarOutlineIcon />
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
        getQuizPath={getQuizPath}
      />
    </Card>
  );
}

export default QuizCard;
