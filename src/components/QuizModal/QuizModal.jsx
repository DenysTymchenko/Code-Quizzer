import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Button,
  Box,
  Modal,
  Typography,
} from '@mui/material/';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { addToFavorites, removeFromFavorites } from '../../store/modules/favorites/reducer';
import { modalStyles, btnStyles } from '../../mui-customs/custom-styles';
import './QuizModal.css';

function QuizModal({
  open,
  handleClose,
  quiz,
  isFavorite,
  setIsFavorite,
  getQuizPath,
}) {
  const {
    img,
    title,
    description,
    time,
  } = quiz;

  const dispatch = useDispatch();

  function setFavorite() {
    // eslint-disable-next-line no-unused-expressions
    isFavorite ? dispatch(removeFromFavorites(quiz)) : dispatch(addToFavorites(quiz));
    setIsFavorite(!isFavorite);
  }

  const showTime = () => {
    const minutes = Math.floor(time / 60);
    let seconds = time - (minutes * 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return (`${minutes}:${seconds}`);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box className='modal' sx={modalStyles}>
        <img src={img} alt={title} />
        <div className='wrapper'>
          {isFavorite ? <StarIcon onClick={setFavorite} /> : <StarOutlineIcon onClick={setFavorite} />}
          <Typography className='time' gutterBottom variant='h6' component='div'>
            <QueryBuilderIcon /> {showTime()}
          </Typography>
        </div>
        <div className='info'>
          <Typography
            className='title'
            sx={{ height: 32 }}
            gutterBottom variant='h5'
            component='div'
          >
            {title}
          </Typography>
          <Typography
            className='description'
            sx={{ height: 50 }}
            variant='body2'
          >
            {description}
          </Typography>
        </div>
        <div className='buttons'>
          <Button
            size="small"
            variant="outlined"
            sx={btnStyles}
          >
            <Link to={getQuizPath()}>Start</Link>
          </Button>
          <Button
            size='small'
            variant='outlined'
            sx={btnStyles}
            onClick={handleClose}
          >
            Close
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default QuizModal;
