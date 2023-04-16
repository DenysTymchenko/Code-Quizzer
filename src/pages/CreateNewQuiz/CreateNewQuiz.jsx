import React from 'react';
import { useForm } from 'react-hook-form';
import { Typography, Button } from '@mui/material';
import { h3Styles, formBtnStyles } from '../../mui-customs/custom-styles';
import { Input } from '../../mui-customs/custom-elements';
import './CreateNewQuiz.css';
import { quizzes } from '../../api';

function CreateNewQuiz() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    quizzes.add(data);
    reset();
  };

  return (
    <main className="create-new-quiz mh100vh">
      <Typography variant="h3" sx={h3Styles}>
        Create new quiz
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Title"
          {...register('title', {
            required: 'Title must be filled',
            minLength: {
              value: 2,
              message: 'Title must containt atleast 2 symbols',
            },
          })}
        />
        {errors?.title && <p>{errors.title.message}</p>}
        <Input
          label="Description"
          {...register('description', {
            required: 'Description must be filled',
            minLength: {
              value: 7,
              message: 'Title must containt atleast 7 symbols',
            },
            maxLength: {
              value: 108,
              message: 'Title must containt maximum of 108 symbols',
            },
          })}
        />
        {errors?.description && <p>{errors.description.message}</p>}
        <Input
          type='number'
          label='Time (in seconds)'
          inputProps={{
            min: 60,
            valueAsNumber: true,
          }}
          {...register('time', {
            required: 'Time must be filled with number',
            min: {
              value: 60,
              message: 'Time must be greater than or equal to 60 seconds',
            },
          })}
        />
        {errors?.time && <p>{errors.time.message}</p>}
        <Input
          label="Image link"
          {...register('img', {
            required: 'Image link must be filled',
          })}
        />
        {errors?.img && <p>{errors.img.message}</p>}
        <Button
          variant='contained'
          sx={formBtnStyles}
          type='submit'
          disabled={!isValid}
        >
          Submit
        </Button>
      </form>
    </main>
  );
}

export default CreateNewQuiz;
