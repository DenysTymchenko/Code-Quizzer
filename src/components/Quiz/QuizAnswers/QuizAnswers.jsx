import React from 'react';
import { Button, ButtonGroup, Container } from '@mui/material';
import './QuizAnswers.css';

function QuizAnswers({ quizQuestion }) {
  return (
    <Container className="answers">
      <ButtonGroup
        sx={{
          width: '75%',
          border: '3px solid #252422',
        }}
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        <Button>{quizQuestion.answers[0].answer}</Button>
        <Button>{quizQuestion.answers[1].answer}</Button>
        <Button>{quizQuestion.answers[2].answer}</Button>
      </ButtonGroup>
    </Container>
  );
}

export default QuizAnswers;
