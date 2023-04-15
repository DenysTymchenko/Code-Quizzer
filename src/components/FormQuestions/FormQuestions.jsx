import React from 'react';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Input } from '../../mui-customs/custom-elements';
import { formBtnStyles } from '../../mui-customs/custom-styles';
import FormAnswers from '../FormAnswers/FormAnswers';

function FormQuestions({
  questions,
  question,
  questionIndex,
  setQuestions,
}) {
  let { answers } = question;

  const removeQuestion = (questionIndex) => {
    const questionsUpdated = [...questions];
    questionsUpdated.splice(questionIndex, 1);
    setQuestions(questionsUpdated);
  };

  const setQuestion = (value, questionIndex) => {
    const questionsUpdated = [...questions];
    questionsUpdated[questionIndex].question = value;
    setQuestions(questionsUpdated);
  };

  const addAnswer = (questionIndex) => {
    const questionsUpdated = [...questions];
    answers = [...question.answers, { answer: '', isCorrect: false }];
    questionsUpdated[questionIndex].answers = answers;
    setQuestions(questionsUpdated);
  };

  return (
    <div className="question">
      <div className='wrapper'>
        <Input
          label={`Question ${questionIndex + 1}`}
          value={question.question}
          onChange={(e) => setQuestion(e.target.value, questionIndex)}
        />
        <Button
          variant="contained"
          sx={formBtnStyles}
          onClick={() => removeQuestion(questionIndex)}
        >
          <RemoveIcon />
        </Button>
      </div>
      <div className='add-answer'>
        <Typography variant='h6'>Answers:</Typography>
        <Button
          variant="contained"
          sx={formBtnStyles}
          onClick={() => addAnswer(questionIndex)}
        >
          <AddIcon />
        </Button>
      </div>
      {answers.map((answer, index) => (
        <FormAnswers
          key={index}
          questionIndex={questionIndex}
          questions={questions}
          setQuestions={setQuestions}
          answerIndex={index}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default FormQuestions;
