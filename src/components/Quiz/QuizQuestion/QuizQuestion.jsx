import React from 'react';
import { Container, Typography } from '@mui/material';
import './QuizQuestion.css';

function QuizQuestion({ question }) {
  return (
    <Container className="quiz-question">
      <Typography
        sx={{ textAlign: 'center' }}
        variant="h4"
        gutterBottom
      >
        {question}
      </Typography>
    </Container>
  );
}

export default QuizQuestion;
