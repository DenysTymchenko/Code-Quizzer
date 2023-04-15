/* eslint-disable no-param-reassign */
import React from 'react';
import { Button, Radio } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { Input } from '../../mui-customs/custom-elements';
import { formBtnStyles } from '../../mui-customs/custom-styles';

function FormAnswers({
  questionIndex,
  questions,
  setQuestions,
  answerIndex,
  answer,
}) {
  const removeAnswer = (answerIndex) => {
    const questionsUpdated = [...questions];
    questionsUpdated[questionIndex].answers.splice(answerIndex, 1);
    setQuestions(questionsUpdated);
  };

  const setAnswer = (value, answerIndex) => {
    const questionsUpdated = [...questions];
    questionsUpdated[questionIndex].answers[answerIndex].answer = value;
    setQuestions(questionsUpdated);
  };

  const setCorrect = (answerIndex) => {
    const questionsUpdated = [...questions];
    const answers = questionsUpdated[questionIndex].answers.map((answer, index) => {
      answer.isCorrect = index === answerIndex;
      return answer;
    });
    questionsUpdated[questionIndex].answers = answers;
    setQuestions(questionsUpdated);
  };

  return (
    <div className="answer">
      <div className='wrapper'>
        <Input
          label={`Answer ${answerIndex + 1}`}
          value={answer.answer}
          onChange={(e) => setAnswer(e.target.value, answerIndex)}
        />
        <Button
          variant="contained"
          sx={formBtnStyles}
          onClick={() => removeAnswer(answerIndex)}
        >
          <RemoveIcon />
        </Button>
        <Radio
          checked={answer.isCorrect}
          onChange={() => setCorrect(answerIndex)}
          name={`question_${questionIndex}_answer_isCorrect`}
        />
      </div>
    </div>
  );
}

export default FormAnswers;
