import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import './QuizQuestion.css';

function QuizQuestion() {
  const { questions, index } = useSelector((state) => state.quizReducer);

  return (
    <Container className="quiz-question">
      <Typography
        sx={{ textAlign: 'center' }}
        variant="h4"
        gutterBottom
      >
        {questions[index].question}
      </Typography>
    </Container>
  );
}

export default QuizQuestion;
