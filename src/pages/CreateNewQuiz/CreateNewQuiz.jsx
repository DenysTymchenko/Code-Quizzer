import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  styled,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './CreateNewQuiz.css';

const h3Styles = {
  textAlign: 'center',
  '@media (max-width:600px)': {
    fontSize: '2.5rem',
  },
};

const btnStyles = {
  color: 'var(--secondary)',
  backgroundColor: 'var(--main-alt)',
  '&:hover': {
    backgroundColor: 'var(--main)',
  },
};

const Input = styled(TextField)({
  width: '500px',
  '& label': {
    color: 'var(--main-alt)',
  },
  '& label.Mui-focused': {
    color: 'var(--main-alt)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--main)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--main-alt)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--main)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--main-alt)',
    },
  },
  '@media (max-width:600px)': {
    width: '300px',
  },
});

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
  console.log(questions);

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
          <Button variant="contained" sx={btnStyles} onClick={addQuestion}>
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
              sx={btnStyles}
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
