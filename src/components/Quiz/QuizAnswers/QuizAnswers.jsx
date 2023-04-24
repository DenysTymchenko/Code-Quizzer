/* eslint-disable no-unused-expressions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Container } from '@mui/material';
import './QuizAnswers.css';
import { appendIndex, appendScore, setAnswers } from '../../../store/modules/quiz/reducer';

function QuizAnswers({ setIsEnded }) {
  const { questions, answers, index } = useSelector((state) => state.quizReducer);
  const dispatch = useDispatch();

  const acceptAnswer = (answer) => {
    if (answer.isCorrect) dispatch(appendScore());
    dispatch(appendIndex()); // we need to update index for showing next question and it's answers, after user clicks on any of the answer buttons.
    index + 1 !== questions.length ? dispatch(setAnswers()) : setIsEnded(true);
  };

  return (
    <Container className="quiz-answers">
      <ButtonGroup
        sx={{
          width: '75%',
          border: '3px solid var(--secondary)',
        }}
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {answers.map((answer) => (
          <Button
            key={answer.answer}
            onClick={() => acceptAnswer(answer)}
          >
            {answer.answer}
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
}

export default QuizAnswers;
