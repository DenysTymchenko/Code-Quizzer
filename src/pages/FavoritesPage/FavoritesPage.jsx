import React from 'react';
import { styled, Typography, TextField } from '@mui/material';
import './FavoritesPage.css';

const h3Styles = {
  textAlign: 'center',
  '@media (max-width:600px)': {
    fontSize: '2.5rem',
  },
};

const SearchBar = styled(TextField)({
  width: '35vw',
  '& label.Mui-focused': {
    color: '#252422',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#252422',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#C39801',
    },
    '&:hover fieldset': {
      borderColor: '#252422',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#252422',
    },
  },
});

function FavoritePage() {
  return (
    <main className='favorites-page mh100vh'>
      <Typography variant='h3' sx={h3Styles}>
        Your favorite ones are here
      </Typography>
      <SearchBar
        id="outlined-basic"
        label="Looking for a specific one?"
        placeholder='Search for it!'
        variant="outlined"
      />
      <section className='favorites'></section>
    </main>
  );
}

export default FavoritePage;
