import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import './QuizHeader.css';

function QuizHeader({
  index,
  quizData,
  totalQuestions,
  setIsEnded,
  setTimeIsUp,
}) {
  let { time } = quizData;
  const [timer, setTimer] = useState('');

  const handleTimer = () => {
    const minutes = Math.floor(time / 60);
    let seconds = time - (minutes * 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    // eslint-disable-next-line no-plusplus
    time--;

    setTimer(`${minutes}:${seconds}`);

    if (time === 0) {
      setTimeIsUp(true);
      setIsEnded(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleTimer, 1000);
    return () => clearInterval(interval);
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
        <AssignmentIcon /> {index + 1} / {totalQuestions}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {quizData.title}
      </Typography>
      <Typography variant="h5" gutterBottom>
        <AccessAlarmIcon/> {timer}
      </Typography>
    </Paper>
  );
}

export default QuizHeader;
