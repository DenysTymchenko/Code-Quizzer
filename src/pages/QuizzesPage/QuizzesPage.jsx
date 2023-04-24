/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import QuizCard from '../../components/QuizCard/QuizCard';
import { quizzesThunks } from '../../store/modules/quizzes';
import { h3Styles } from '../../mui-customs/custom-styles';
import { SearchBar } from '../../mui-customs/custom-elements';
import './QuizzesPage.css';

function QuizzesPage() {
  const { quizzes } = useSelector((state) => state.quizzesReducer);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  // for SearchBar
  const handleQuery = (input) => {
    setQuery(input);
  };

  useEffect(() => {
    (async () => {
      query ? await dispatch(quizzesThunks.fetchQuizzesQuery(query)) : await dispatch(quizzesThunks.fetchQuizzes());
    })();
  }, [query]);

  return (
    <main className='quizzes-page mh100vh'>
      <Typography variant='h3' sx={h3Styles}>
        All quizzes in one place
      </Typography>
      <SearchBar
        id="outlined-basic"
        label="Looking for a specific one?"
        placeholder='Search for it!'
        variant="outlined"
        onChange={(e) => handleQuery(e.target.value)}
      />
      <section className='quizzes'>
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            quiz={quiz}
          />
        ))}
      </section>
    </main>
  );
}

export default QuizzesPage;
