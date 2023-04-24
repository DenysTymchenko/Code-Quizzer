import React from 'react';
import {
  Button,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import './QuizStartWindow.css';
import { useDispatch, useSelector } from 'react-redux';
import { nullifyScore, nullifyIndex, setTime } from '../../store/modules/quiz/reducer';

function QuizStartWindow({ setIsStarted }) {
  const { quiz, time, questions } = useSelector((state) => state.quizReducer);
  const dispatch = useDispatch();
  // we need to reset our score and index to 0, when user dicided to start a new quiz again.
  dispatch(nullifyScore());
  dispatch(nullifyIndex());

  const showTime = () => {
    dispatch(setTime());

    const minutes = Math.floor(time / 60);
    let seconds = time - (minutes * 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return (`${minutes}:${seconds}`);
  };

  const setStarted = () => {
    setIsStarted(true);
  };

  return (
    <Paper
      sx={{
        color: 'var(--secondary-alt)',
        backgroundColor: 'var(--secondary)',
      }}
      className="quiz-start-window"
      elevation={0}
    >
      <Typography variant="h3" gutterBottom>
        {quiz.title}
      </Typography>
      <Typography variant="h4">
        {quiz.description}
      </Typography>
      <Container className='wrapper'>
        <Typography variant="h5">
          <AssignmentIcon/> {questions.length}
        </Typography>
        <Typography variant="h5">
          <AccessAlarmIcon/> {showTime()}
        </Typography>
      </Container>
      <Button sx={{ color: 'var(--secondary-alt)' }} onClick={setStarted}>
        <PlayCircleFilledIcon />
      </Button>
    </Paper>
  );
}

export default QuizStartWindow;
