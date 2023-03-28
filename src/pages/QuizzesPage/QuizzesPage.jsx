import React from 'react';
import Typography from '@mui/material/Typography';

const h3Styles = {
  textAlign: 'center',
  marginBottom: 5,
  '@media (max-width:600px)': {
    fontSize: '2.5rem',
  },
};

function QuizzesPage() {
  return (
    <main>
      <Typography variant='h3' sx={h3Styles}>
        All quizzes in one place
      </Typography>
    </main>
  );
}

export default QuizzesPage;
