import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled, Typography, TextField } from '@mui/material';
import './QuizzesPage.css';
import QuizCard from '../../components/QuizCard/QuizCard';
import { quizzesThunks } from '../../store/modules/quizzes';

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

function QuizzesPage() {
  const { quizzes } = useSelector((state) => state.quizzesReducer);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    (async () => {
      // eslint-disable-next-line no-unused-expressions
      query ? await dispatch(quizzesThunks.fetchQuizzesQuery(query)) : await dispatch(quizzesThunks.fetchQuizzes());
    })();
  }, [query]);

  const handleQuery = (input) => {
    setQuery(input);
  };

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
