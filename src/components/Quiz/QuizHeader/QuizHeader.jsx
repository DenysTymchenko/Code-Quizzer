import React from 'react';
import { Paper, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import './QuizHeader.css';

function QuizHeader({ index, quizData, totalQuestions }) {
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
        <AccessAlarmIcon/> 5:00
      </Typography>
    </Paper>
  );
}

export default QuizHeader;
