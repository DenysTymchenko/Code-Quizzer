import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import QuizCard from '../QuizCard/QuizCard';
import { quizzesThunks } from '../../store/modules/quizzes';

const h3Styles = {
  textAlign: 'center',
  marginBottom: 5,
  '@media (max-width:600px)': {
    fontSize: '2.5rem',
  },
};

function QuizzesSection() {
  const { quizzes } = useSelector((state) => state.quizzesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(quizzesThunks.fetchQuizzes());
    })();
  }, []);

  return (
    <section id='quizzes' className='mh100vh'>
      <Typography variant='h3' sx={h3Styles}>
        Best way to start
      </Typography>
      <div className='wrapper'>
        {quizzes.map((quiz) => (
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
