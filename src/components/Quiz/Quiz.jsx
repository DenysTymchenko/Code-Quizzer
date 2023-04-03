import React from 'react';
import { Container } from '@mui/material';
import QuizHeader from './QuizHeader/QuizHeader';
import QuizQuestion from './QuizQuestion/QuizQuestion';
import QuizAnswers from './QuizAnswers/QuizAnswers';
import './Quiz.css';

function Quiz({
  quizData,
  quizQuestions,
  setIsEnded,
  index,
  setIndex,
  score,
  setScore,
  setTimeIsUp,
}) {
  return (
    <Container className="quiz">
      <QuizHeader
        index={index}
        quizData={quizData}
        totalQuestions={quizQuestions.length}
        setIsEnded={setIsEnded}
        setTimeIsUp={setTimeIsUp}
      />
      <QuizQuestion question={quizQuestions[index].question}/>
      <QuizAnswers
        answers={quizQuestions[index].answers}
        totalQuestions = {quizQuestions.length}
        index={index}
        setIndex={setIndex}
        score={score}
        setScore={setScore}
        setIsEnded={setIsEnded}
      />
    </Container>
  );
}

export default Quiz;
