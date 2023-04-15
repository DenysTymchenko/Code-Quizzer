import React from 'react';
import { Typography } from '@mui/material';
import './KonamiCode.css';

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

function KonamiCode() {
  return (
    <main className="konami-code h100vh">
      <video src='./assets/konami-code.mp4' autoPlay loop muted></video>
      <div className='text'>
        <Typography variant='h1' gutterBottom sx={h1Styles}>
          Cool trick!
        </Typography>
        <Typography variant='h2' gutterBottom sx={h2Styles}>
          But you&apos;ll get nothing for it :(
        </Typography>
      </div>
    </main>
  );
}

export default KonamiCode;
