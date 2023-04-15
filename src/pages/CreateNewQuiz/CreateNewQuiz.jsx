import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { h3Styles, formBtnStyles } from '../../mui-customs/custom-styles';
import { Input } from '../../mui-customs/custom-elements';
import FormQuestions from '../../components/FormQuestions/FormQuestions';
import './CreateNewQuiz.css';

function CreateNewQuiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const addQuestion = () => {
    const questionsUpdated = [...questions, { question: '', answers }];
    setQuestions(questionsUpdated);
  };

  const {
    register,
    // !!!!!!!!!!!!!!!!DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  console.log(questions);

  return (
    <main className="create-new-quiz mh100vh">
      <Typography variant="h3" sx={h3Styles}>
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
        <div className="wrapper">
          <Typography variant="h4">Questions:</Typography>
          <Button
            variant="contained"
            sx={formBtnStyles}
            onClick={addQuestion}
          >
            <AddIcon />
          </Button>
        </div>
        {questions.map((question, index) => (
          <FormQuestions
            key={index}
            questions={questions}
            question={question}
            answers={answers}
            questionIndex={index}
            setQuestions={setQuestions}
            setAnswers={setAnswers}
          />
        ))}
      </form>
    </main>
  );
}

export default CreateNewQuiz;
