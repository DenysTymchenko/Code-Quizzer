import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { quiz } from '../../api';
import './QuizPage.css';
import QuizHeader from '../../components/Quiz/QuizHeader/QuizHeader';
import QuizQuestion from '../../components/Quiz/QuizQuestion/QuizQuestion';
import QuizAnswers from '../../components/Quiz/QuizAnswers/QuizAnswers';

function QuizPage() {
  const { name } = useParams();
  const [quizData, setQuizData] = useState({});
  const [quizQuestions, setQuizQuestions] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await quiz.fetch(name);
      setQuizData(data);
      setQuizQuestions(data.questions);
    })();
  }, []);

  return (
    <main className="quiz-page mh100vh">
      {quizQuestions.length > 0 && (
        <Container className="quiz">
          <QuizHeader quizData={quizData} totalQuestions={quizQuestions.length}/>
          <QuizQuestion question={quizQuestions[0].question}/>
          <QuizAnswers quizQuestion={quizQuestions[0]}/>
        </Container>
      )}
    </main>
  );
}

export default QuizPage;
