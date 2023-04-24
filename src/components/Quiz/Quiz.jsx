import React from 'react';
import { Container } from '@mui/material';
import QuizHeader from './QuizHeader/QuizHeader';
import QuizQuestion from './QuizQuestion/QuizQuestion';
import QuizAnswers from './QuizAnswers/QuizAnswers';
import './Quiz.css';

function Quiz({ setIsEnded, setTimeIsUp }) {
  return (
    <Container className="quiz">
      {/* Top part that shows how many questions left, title, and time */}
      <QuizHeader setIsEnded={setIsEnded} setTimeIsUp={setTimeIsUp} />
      {/* Just a big block with a question */}
      <QuizQuestion />
      {/* Block with answer options */}
      <QuizAnswers setIsEnded={setIsEnded} />
    </Container>
  );
}

export default Quiz;
