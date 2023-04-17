import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import Quiz from '../../components/Quiz/Quiz';
import './QuizPage.css';
import QuizStartWindow from '../../components/QuizStartWindow/QuizStartWindow';
import QuizResultWindow from '../../components/QuizResultWindow/QuizResultWindow';
import { quizThunks } from '../../store/modules/quiz';
import { quizzesThunks } from '../../store/modules/quizzes';
import { setAnswers } from '../../store/modules/quiz/reducer';

function QuizPage() {
  // eslint-disable-next-line prefer-const
  let { questions } = useSelector((state) => state.quizReducer);
  const { quizzes } = useSelector((state) => state.quizzesReducer);
  const dispatch = useDispatch();
  const { name } = useParams();

  const [isExists, setIsExists] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [timeIsUp, setTimeIsUp] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(quizzesThunks.fetchQuizzes());
        await dispatch(quizThunks.fetchQuiz(name));
        dispatch(setAnswers());
        setIsExists(true);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, []);

  const QuizInDb = (quizzes.filter((quiz) => quiz.title.replaceAll(' ', '_').toLowerCase() === name)).length > 0;

  return (
    <main className="quiz-page mh100vh">
      {isLoaded && (
        <>
          {!isExists && (<Navigate to='/*' />)}
          {!isExists && QuizInDb && (<Navigate to='/quiz/in-progress' />)}
          {questions.length > 0 && !isStarted && (<QuizStartWindow setIsStarted={setIsStarted} />)}
          {isStarted && !isEnded && (<Quiz setIsEnded={setIsEnded} setTimeIsUp={setTimeIsUp} />)}
          {isEnded && (
            <QuizResultWindow
              setIsEnded={setIsEnded}
              setIsStarted={setIsStarted}
              timeIsUp={timeIsUp}
            />
          )}
        </>
      )}
    </main>
  );
}

export default QuizPage;
