import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import Quiz from '../../components/Quiz/Quiz';
import './QuizPage.css';
import QuizStartWindow from '../../components/QuizStartWindow/QuizStartWindow';
import QuizResultWindow from '../../components/QuizResultWindow/QuizResultWindow';
import { quizThunks } from '../../store/modules/quiz';
import { setAnswers, setQuestions } from '../../store/modules/quiz/reducer';

function QuizPage() {
  const { quizExists, questions } = useSelector((state) => state.quizReducer);
  const dispatch = useDispatch();

  const { name } = useParams();

  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [timeIsUp, setTimeIsUp] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(quizThunks.fetchQuiz(name));
      dispatch(setQuestions());
      dispatch(setAnswers()); // We need it to update first answers options, if we starting new quiz or starting it again.
    })();
  }, []);

  return (
    <main className="quiz-page mh100vh">
      {!quizExists && (<Navigate to='/*' />)}
      {questions.length > 0 && !isStarted && (<QuizStartWindow setIsStarted={setIsStarted} />)}
      {isStarted && !isEnded && (<Quiz setIsEnded={setIsEnded} setTimeIsUp={setTimeIsUp} />)}
      {isEnded && (
        <QuizResultWindow
          setIsEnded={setIsEnded}
          setIsStarted={setIsStarted}
          timeIsUp={timeIsUp}
        />
      )}
    </main>
  );
}

export default QuizPage;
