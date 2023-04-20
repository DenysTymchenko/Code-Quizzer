import React from 'react';
import { Typography } from '@mui/material';
import { h1Styles, h2Styles } from '../../mui-customs/custom-styles';
import './QuizInProgress.css';

function QuizInProgress() {
  return (
    <main className="quiz-in-progress h100vh">
      <video src='.././assets/in-progress.mp4' autoPlay loop muted></video>
      <div className='text'>
        <Typography variant='h1' gutterBottom sx={h1Styles}>
          Quiz is not ready yet :(
        </Typography>
        <Typography variant='h2' gutterBottom sx={h2Styles}>
          Comeback later.
        </Typography>
      </div>
    </main>
  );
}

export default QuizInProgress;
