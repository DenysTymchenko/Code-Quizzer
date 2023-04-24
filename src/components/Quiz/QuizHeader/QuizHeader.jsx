/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import './QuizHeader.css';

function QuizHeader({ setIsEnded, setTimeIsUp }) {
  const { quiz, questions, index } = useSelector((state) => state.quizReducer);
  let { time } = useSelector((state) => state.quizReducer);

  const [timer, setTimer] = useState('');

  const handleTimer = () => {
    const minutes = Math.floor(time / 60);
    let seconds = time - (minutes * 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    time--;

    setTimer(`${minutes}:${seconds}`);

    if (time === 0) {
      setTimeIsUp(true);
      setIsEnded(true);
    }
  };

  // We need to update timer every second, so we'll use useEffect for it.
  useEffect(() => {
    const interval = setInterval(handleTimer, 1000);
    return () => clearInterval(interval); // we use clearInterval to prevent handleTimer from being called repeatedly after the component unmounts or is re-rendered, which could lead to memory leaks and performance issues.
  }, []);

  return (
    <Paper
      className="quiz-header"
      sx={{
        color: 'white',
        backgroundColor: '#252422',
        borderRadius: 0,
      }}
      elevation={2}
    >
      <Typography variant="h5" gutterBottom>
        <AssignmentIcon /> {index + 1} / {questions.length}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {quiz.title}
      </Typography>
      <Typography variant="h5" gutterBottom>
        <AccessAlarmIcon/> {timer}
      </Typography>
    </Paper>
  );
}

export default QuizHeader;
