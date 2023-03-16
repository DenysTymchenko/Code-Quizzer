import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import QuizCard from '../QuizCard/QuizCard';
import axios from 'axios';

const h3Styles = {
  textAlign: 'center',
  marginBottom: 5,
  '@media (max-width:600px)': {
    fontSize: '2.5rem',
  },
}

function QuizzesSection() {
  let [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    (async () => {
      const {data} = await axios.get('https://63ef5f59271439b7fe6d10b5.mockapi.io/quizzes');
      setQuizzes(data);
    })();
  }, []);

  return (
    <section id='quizzes'>
      <Typography variant='h3' sx={h3Styles}>
        Best way to start
      </Typography>
      <div className='wrapper'>
        {quizzes.map(quiz => (
          <QuizCard
            key={quiz.id}
            quiz={quiz}
          />
        ))}
      </div>
    </section>
  )
}

export default QuizzesSection;
