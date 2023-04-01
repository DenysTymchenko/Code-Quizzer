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

function QuizStartWindow({
  quizData,
  setIsStarted,
}) {
  const setStarted = () => {
    setIsStarted(true);
  };

  return (
    <Paper
      sx={{
        color: 'white',
        backgroundColor: '#252422',
      }}
      className="quiz-start-window"
      elevation={0}
    >
      <Typography variant="h3" gutterBottom>
        {quizData.title}
      </Typography>
      <Typography variant="h4">
        {quizData.description}
      </Typography>
      <Container className='wrapper'>
        <Typography variant="h5">
          <AssignmentIcon/> {quizData.questions.length}
        </Typography>
        <Typography variant="h5">
          <AccessAlarmIcon/> 5:00
        </Typography>
      </Container>
      <Button sx={{ color: 'white' }} onClick={setStarted}>
        <PlayCircleFilledIcon />
      </Button>
    </Paper>
  );
}

export default QuizStartWindow;
