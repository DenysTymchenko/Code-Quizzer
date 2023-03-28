import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import QuizCard from '../QuizCard/QuizCard';
import { quizzes } from '../../api';

const h3Styles = {
  textAlign: 'center',
  marginBottom: 5,
  '@media (max-width:600px)': {
    fontSize: '2.5rem',
  },
};

function QuizzesSection() {
  const [quizzesData, setQuizzesData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await quizzes.fetch();
      setQuizzesData(data);
    })();
  }, []);

  return (
    <section id='quizzes'>
      <Typography variant='h3' sx={h3Styles}>
        Best way to start
      </Typography>
      <div className='wrapper'>
        {quizzesData.map((quiz) => (
          <QuizCard
            key={quiz.id}
            quiz={quiz}
          />
        ))}
      </div>
    </section>
  );
}

export default QuizzesSection;
