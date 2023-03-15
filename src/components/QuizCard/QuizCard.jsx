import React, { useState } from "react";
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import QuizModal from "../QuizModal/QuizModal";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '9999',
}

function QuizCard({key, quiz}) {

  const [isStarted, setStart] = useState(false);
  const handleStart = () => setStart(!isStarted); //temporary for open/close alert

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card key={key} sx={{maxWidth: 345, height: 'fit-content'}}>
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
        <Typography gutterBottom variant="h5" component="div">
          {quiz.title}
        </Typography>
        <Typography variant="body2">
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
          size="small"
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: '#F7EC59',
            "&:hover": {
              borderColor: '#FEC601',
            }
          }}
          onClick={handleStart}
        >
          Start
        </Button>
        {isStarted && <Alert severity="success" sx={style}>Quiz started (Temporary realisation)</Alert>}

        <Button
          size="small"
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: '#F7EC59',
            "&:hover": {
              borderColor: '#FEC601',
            }
          }}
          onClick={handleOpen}
        >
          Learn More
        </Button>
        <QuizModal open={open} handleClose={handleClose} quiz={quiz} handleStart={handleStart} />
      </CardActions>
    </Card>
  );
}

export default QuizCard;