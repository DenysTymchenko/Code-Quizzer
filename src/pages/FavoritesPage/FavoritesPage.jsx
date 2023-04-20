import React, { useState } from 'react';
import { Typography } from '@mui/material';
import './FavoritesPage.css';
import { useSelector } from 'react-redux';
import QuizCard from '../../components/QuizCard/QuizCard';
import { h3Styles } from '../../mui-customs/custom-styles';
import { SearchBar } from '../../mui-customs/custom-elements';

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
