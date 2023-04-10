import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Container } from '@mui/material';
import './QuizAnswers.css';
import { appendIndex, appendScore, setAnswers } from '../../../store/modules/quiz/reducer';

function QuizAnswers({ setIsEnded }) {
  const { questions, answers, index } = useSelector((state) => state.quizReducer);
  const dispatch = useDispatch();

  const acceptAnswer = (answer) => {
    dispatch(appendIndex());

    if (answer.isCorrect) {
      dispatch(appendScore());
    }

    // eslint-disable-next-line no-unused-expressions
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
          <Button key={answer.answer} onClick={() => acceptAnswer(answer)}>{answer.answer}</Button>
        ))}
      </ButtonGroup>
    </Container>
  );
}

export default QuizAnswers;
