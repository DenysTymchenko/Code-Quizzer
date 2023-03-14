import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function QuizCard({img, title, description}) {
  console.log(img, title, description);
  return (
    <Card sx={{maxWidth: 345, height: 'fit-content'}}>
      <CardMedia
        sx={{height: 300}}
        image={img}
        title={title}
      />

      <CardContent
        sx={{
          backgroundColor: '#252422',
          color: 'white',
          textAlign: 'center',
        }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#252422',
        }}
      >
        <Button size="small">Start</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default QuizCard;