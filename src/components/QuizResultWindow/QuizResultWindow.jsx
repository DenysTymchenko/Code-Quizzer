import React from 'react';
import { Link } from 'react-router-dom';
import {
  Alert,
  AlertTitle,
  Button,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import './QuizResultWindow.css';

const btnStyles = {
  color: 'white',
  borderColor: 'var(--main-alt)',
  '&:hover': {
    borderColor: 'var(--main)',
  },
};

function QuizResultWindow({
  score,
  totalQuestions,
  setIsEnded,
  setScore,
  setIsStarted,
  setIndex,
  timeIsUp,
}) {
  const crateCongratulationsText = () => {
    if (score < totalQuestions / 2) return 'Keep practicing!';
    if (score === totalQuestions / 2) return 'Nice one!';
    if (score > totalQuestions / 2 && score !== totalQuestions) return 'Good job!';
    if (score === totalQuestions) return 'Perfect!';
  };

  const tryAgain = () => {
    setScore(0);
    setIndex(0);
    setIsStarted(false);
    setIsEnded(false);
  };

  return (
    <Paper
      className="quiz-result-window"
      sx={{
        color: 'var(--secondary-alt)',
        backgroundColor: 'var(--secondary)',
      }}
      elevation={0}
    >
      <Typography variant="h2" gutterBottom>
        {crateCongratulationsText()}
      </Typography>
      <Typography variant="h3" gutterBottom>
        {score} / {totalQuestions}
      </Typography>

      <Container className="buttons">
        <Button
          sx={btnStyles}
          variant="outlined"
          onClick={() => tryAgain()}
        >
          Try again
        </Button>
        <Button sx={btnStyles} variant="outlined">
          <Link to="/quizzes">
            Back to quizzes
          </Link>
        </Button>
      </Container>

      {timeIsUp && (
        <Alert className="alert" severity="error">
          <AlertTitle><strong>Time is up</strong></AlertTitle>
          We&apos;re sorry, but you&apos;ve run out of time
        </Alert>
      )}
    </Paper>
  );
}

export default QuizResultWindow;
