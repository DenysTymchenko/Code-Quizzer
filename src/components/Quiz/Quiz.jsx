import React from 'react';
import { Container } from '@mui/material';
import QuizHeader from './QuizHeader/QuizHeader';
import QuizQuestion from './QuizQuestion/QuizQuestion';
import QuizAnswers from './QuizAnswers/QuizAnswers';
import './Quiz.css';

function Quiz({ setIsEnded, setTimeIsUp }) {
  return (
    <Container className="quiz">
      <QuizHeader setIsEnded={setIsEnded} setTimeIsUp={setTimeIsUp} />
      <QuizQuestion />
      <QuizAnswers setIsEnded={setIsEnded} />
    </Container>
  );
}

export default Quiz;
