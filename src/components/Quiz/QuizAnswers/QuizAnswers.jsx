import React from 'react';
import { Button, ButtonGroup, Container } from '@mui/material';
import './QuizAnswers.css';

function QuizAnswers({
  answers,
  totalQuestions,
  index,
  setIndex,
  score,
  setScore,
  setIsEnded,
}) {
  const acceptAnswer = (answer) => {
    // eslint-disable-next-line no-param-reassign,no-plusplus
    setIndex(++index);
    if (answer.isCorrect) {
      // eslint-disable-next-line no-param-reassign,no-plusplus
      setScore(++score);
    }
    if (index + 1 > totalQuestions) {
      setIsEnded(true);
    }
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
