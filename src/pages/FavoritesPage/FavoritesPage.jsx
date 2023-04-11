import React, { useState } from 'react';
import { styled, Typography, TextField } from '@mui/material';
import './FavoritesPage.css';
import { useSelector } from 'react-redux';
import QuizCard from '../../components/QuizCard/QuizCard';

const h3Styles = {
  textAlign: 'center',
  '@media (max-width:600px)': {
    fontSize: '2.5rem',
  },
};

const SearchBar = styled(TextField)({
  width: '500px',
  '& label.Mui-focused': {
    color: 'var(--secondary)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--secondary)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#var(--main-alt)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--secondary)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--secondary)',
    },
  },
  '@media (max-width:600px)': {
    width: '300px',
  },
});

function FavoritePage() {
  const { favorites } = useSelector((state) => state.favoritesReducer);

  const [query, setQuery] = useState('');
  const handleQuery = (input) => {
    setQuery(input);
  };

  const favQuizzes = query ? favorites.filter((favQuiz) => favQuiz.title.toLowerCase().indexOf(query) !== -1) : favorites;

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
        onChange={(e) => handleQuery(e.target.value)}
      />
      <section className='favorites'>
        {favQuizzes.map((favQuiz) => (
          <QuizCard
            key={favQuiz.id}
            quiz={favQuiz}
          />
        ))}
      </section>
    </main>
  );
}

export default FavoritePage;
