import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Box,
  Modal,
  Typography,
} from '@mui/material/';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import './QuizModal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  bgcolor: '#252422',
  color: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  paddingBottom: '10px',
};

function QuizModal({
  open, handleClose, quiz, getQuizPath,
}) {
  const {
    img,
    title,
    description,
    time,
  } = quiz;

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
      <Box sx={style}>
        <img src={img} alt={title} />
        <Typography className='time' gutterBottom variant='h6' component='div'>
          <QueryBuilderIcon /> {showTime()}
        </Typography>
        <div className='info'>
          <Typography
            sx={{
              height: 32,
              overflow: 'auto',
            }}
            gutterBottom variant='h5'
            component='div'
          >
            {title}
          </Typography>
          <Typography
            sx={{
              height: 50,
              overflow: 'auto',
            }}
            variant='body2'
          >
            {description}
          </Typography>
        </div>
        <div className='buttons'>
          <Button
            size="small"
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'var(--main-alt)',
              '&:hover': {
                borderColor: 'var(--main)',
              },
            }}
          >
            <Link to={getQuizPath()}>Start</Link>
          </Button>
          <Button
            size='small'
            variant='outlined'
            sx={{
              color: 'white',
              borderColor: 'var(--main-alt)',
              '&:hover': {
                borderColor: 'var(--main)',
              },
            }}
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
