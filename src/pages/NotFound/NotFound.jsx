import React from 'react';
import Typography from '@mui/material/Typography';
import './NotFound.css';

const h1Styles = {
  textAlign: 'center',
  '@media (max-width:600px)': {
    fontSize: '4rem',
    fontWeight: 600,
  },
};

const h2Styles = {
  textAlign: 'center',
  '@media (max-width:600px)': {
    fontSize: '2rem',
  },
};

function NotFound() {
  return (
    <section className='not-found'>
      <video src='./assets/not_foud.mp4' autoPlay loop muted></video>
      <div className='text'>
        <Typography variant='h1' gutterBottom sx={h1Styles}>
          You have reached the world&apos;s edge.
        </Typography>
        <Typography variant='h2' gutterBottom sx={h2Styles}>
          None but devils play past here... Turn back.
        </Typography>
      </div>
    </section>
  );
}

export default NotFound;
