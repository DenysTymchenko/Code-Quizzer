import React from 'react';
import Typography from '@mui/material/Typography';
import { h1Styles, h2Styles } from '../../mui-customs/custom-styles';
import './NotFound.css';

function NotFound() {
  return (
    <main className='not-found h100vh'>
      <video src='./assets/not_foud.mp4' autoPlay loop muted></video>
      <div className='text'>
        <Typography variant='h1' gutterBottom sx={h1Styles}>
          You have reached the world&apos;s edge.
        </Typography>
        <Typography variant='h2' gutterBottom sx={h2Styles}>
          None but devils play past here... Turn back.
        </Typography>
      </div>
    </main>
  );
}

export default NotFound;
