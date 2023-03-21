import React from 'react';
import Typography from '@mui/material/Typography';
import QuizCard from '../QuizCard/QuizCard';
import { quizzes } from "../../api";

const h3Styles = {
  textAlign: 'center',
  marginBottom: 5,
  '@media (max-width:600px)': {
    fontSize: '2.5rem',
  },
};

class QuizzesSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzesData: [],
    };
  }

  componentDidMount() {
    quizzes.fetch()
      .then(response => {
        this.setState({quizzesData: response.data});
      })
  }

  render() {
    return (
      <section id='quizzes'>
        <Typography variant='h3' sx={h3Styles}>
          Best way to start
        </Typography>
        <div className='wrapper'>
          {this.state.quizzesData.map(quiz => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default QuizzesSection;
