import React from 'react';
import {
  Card,
  Alert,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';
import QuizModal from '../QuizModal/QuizModal';

const btnStyles = {
  color: 'white',
  borderColor: '#F7EC59',
  '&:hover': {
    borderColor: '#FEC601',
  }
}

const alertStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '9999',
}

class QuizCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted : false,
      open : false,
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  
  handleStart() {
    this.setState({
      isStarted: !this.state.isStarted,
    });
  }
  handleOpen() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const { quiz } = this.props;
      
    return (
      <Card sx={{maxWidth: 345, height: 'fit-content'}}>
        <CardMedia
          sx={{height: 300}}
          image={quiz.img}
          title={quiz.title}
        />
        <CardContent
          sx={{
            backgroundColor: '#252422',
            color: 'white',
            textAlign: 'center',
          }}>
          <Typography gutterBottom variant='h5' component='div'>
            {quiz.title}
          </Typography>
          <Typography variant='body2'>
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
          <Button
            size='small'
            variant='outlined'
            sx={btnStyles}
            onClick={this.handleStart}
          >
            Start
          </Button>
          <Button
            size='small'
            variant='outlined'
            sx={btnStyles}
            onClick={this.handleOpen}
          >
            Learn More
          </Button>
        </CardActions>
        {this.state.isStarted
          && <Alert severity='success' sx={alertStyles}>Quiz started (Temporary realisation)</Alert>}
        <QuizModal open={this.state.open} handleClose={this.handleClose} quiz={quiz} handleStart={this.handleStart}/>
      </Card>
    );
  }
}

export default QuizCard;
