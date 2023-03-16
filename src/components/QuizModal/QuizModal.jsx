import React from 'react';
import {
  Button,
  Box,
  Modal,
  Typography
} from '@mui/material/';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import './QuizModal.css'

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

function QuizModal({ open, handleClose, quiz, handleStart }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <img src={quiz.img} alt={quiz.title}/>
        <Typography className='time' gutterBottom variant='h6' component='div'>
          <QueryBuilderIcon/> {quiz.time / 60000} min.
        </Typography>
        <div className='info'>
          <Typography gutterBottom variant='h5' component='div'>
            {quiz.title}
          </Typography>
          <Typography variant='body2'>
            {quiz.description}
          </Typography>
        </div>
        <div className='buttons'>
          <Button
            size='small'
            variant='outlined'
            sx={{
              color: 'white',
              borderColor: '#F7EC59',
              '&:hover': {
                borderColor: '#FEC601',
              }
            }}
            onClick={handleStart}
          >
            Start
          </Button>
          <Button
            size='small'
            variant='outlined'
            sx={{
              color: 'white',
              borderColor: '#F7EC59',
              '&:hover': {
                borderColor: '#FEC601',
              }
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
