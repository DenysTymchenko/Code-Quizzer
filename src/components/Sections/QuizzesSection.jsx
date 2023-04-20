import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import QuizCard from '../QuizCard/QuizCard';
import { quizzesThunks } from '../../store/modules/quizzes';
import { h3Styles } from '../../mui-customs/custom-styles';

function QuizzesSection() {
  const { quizzes } = useSelector((state) => state.quizzesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(quizzesThunks.fetchQuizzes());
    })();
  }, []);

  const mainPageQuizzes = quizzes.slice(0, 3);

  return (
    <section id='quizzes' className='mh100vh'>
      <Typography variant='h3' sx={h3Styles}>
        Best way to start
      </Typography>
      <div className='wrapper'>
        {mainPageQuizzes.map((quiz) => (
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
