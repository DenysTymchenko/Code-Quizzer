import React, { useEffect, useState } from 'react';
import { styled, Typography, TextField } from '@mui/material';
import './QuizzesPage.css';
import { quizzes } from '../../api';
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
  '@media (max-width:600px)': {
    width: '300px',
  },
});

function QuizzesPage() {
  const [query, setQuery] = useState('');
  const [quizzesData, setQuizzesData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = query ? await quizzes.queryFetch(query) : await quizzes.fetch();
      setQuizzesData(data);
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
        {quizzesData.map((quiz) => (
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
