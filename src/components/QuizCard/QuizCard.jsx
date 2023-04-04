import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import QuizModal from '../QuizModal/QuizModal';

const btnStyles = {
  color: 'white',
  borderColor: '#F7EC59',
  '&:hover': {
    borderColor: '#FEC601',
  },
};

function QuizCard({ quiz }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getQuizPath = () => `/quiz/${quiz.title.replaceAll(' ', '_').toLowerCase()}`;

  return (
    <Card sx={{ width: 325, height: 'fit-content' }}>
      <CardMedia
        sx={{ height: 300 }}
        image={quiz.img}
        title={quiz.title}
      />
      <CardContent
        sx={{
          backgroundColor: '#252422',
          color: 'white',
          textAlign: 'center',
        }}>
        <Typography
          sx={{
            height: 32,
            overflow: 'auto',
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {quiz.title}
        </Typography>
        <Typography
          sx={{
            height: 50,
            overflow: 'auto',
          }}
          variant="body2">
          {quiz.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#252422',
        }}
      >
        <Link to={getQuizPath()}>
          <Button
            size="small"
            variant="outlined"
            sx={btnStyles}
          >
            Start
          </Button>
        </Link>
        <Button
          size='small'
          variant='outlined'
          sx={btnStyles}
          onClick={handleOpen}
        >
          Learn More
        </Button>
      </CardActions>
      <QuizModal
        open={open}
        handleClose={handleClose}
        quiz={quiz}
        getQuizPath={getQuizPath}
      />
    </Card>
  );
}

export default QuizCard;
