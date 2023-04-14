import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { h3Styles, formBtnStyles } from '../../mui-customs/custom-styles';
import { Input } from '../../mui-customs/custom-elements';
import './CreateNewQuiz.css';

function CreateNewQuiz() {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  const [questions, setQuestions] = useState([]);
  const addQuestion = () => {
    const questionsUpdated = [...questions];
    questionsUpdated.push('');
    setQuestions(questionsUpdated);
  };
  const removeQuestion = (index) => {
    const questionsUpdated = [...questions];
    questionsUpdated.splice(index, 1);
    setQuestions(questionsUpdated);
  };
  const setQuestionInput = (value, index) => {
    const questionsUpdated = [...questions];
    questionsUpdated[index] = value;
    setQuestions(questionsUpdated);
  };

  return (
    <main className='create-new-quiz mh100vh'>
      <Typography variant='h3' sx={h3Styles}>
        Create new quiz
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Title"
          {...register('title', {
            required: true,
          })}
        />
        <Input
          label="Description"
          {...register('description', {
            required: true,
          })}
        />
        <Input
          type="number"
          label="Time (in seconds)"
          {...register('time', {
            required: true,
          })}
        />
        <div className='wrapper'>
          <Typography variant='h4'>
            Questions:
          </Typography>
          <Button variant="contained" sx={formBtnStyles} onClick={addQuestion}>
            <AddIcon />
          </Button>
        </div>
        {questions.map((question, index) => (
          <div key={index} className='question'>
            <Input
              label={`Question ${index + 1}`}
              value={question}
              {...register(
                `question${index}`,
                {
                  required: true,
                },
              )}
              onChange={(e) => setQuestionInput(e.target.value, index)}
            />
            <Button
              variant="contained"
              sx={formBtnStyles}
              onClick={() => removeQuestion(index)}>
              <RemoveIcon />
            </Button>
          </div>
        ))}

        {errors?.quizTitle && <p>Check</p>}
      </form>
    </main>
  );
}

export default CreateNewQuiz;
