import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Alert,
  AlertTitle,
  Button,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import { btnStyles } from '../../mui-customs/custom-styles';
import './QuizResultWindow.css';

function QuizResultWindow({
  setIsEnded,
  setIsStarted,
  timeIsUp,
  setTimeIsUp,
}) {
  const { score, questions } = useSelector((state) => state.quizReducer);

  const crateCongratulationsText = () => {
    if (score < questions.length / 2) return 'Keep practicing!';
    if (score === questions.length / 2) return 'Nice one!';
    if (score > questions.length / 2 && score !== questions.length / 2) return 'Good job!';
    if (score === questions.length / 2) return 'Perfect!';
  };

  const tryAgain = () => {
    setIsStarted(false);
    setIsEnded(false);
    setTimeIsUp(false);
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
        {score} / {questions.length}
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
