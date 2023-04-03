import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Quiz from '../../components/Quiz/Quiz';
import { quiz } from '../../api';
import './QuizPage.css';
import QuizStartWindow from '../../components/QuizStartWindow/QuizStartWindow';
import QuizResultWindow from '../../components/QuizResultWindow/QuizResultWindow';

function QuizPage() {
  const { name } = useParams();
  const [pageExists, setPageExists] = useState(true);
  const [quizData, setQuizData] = useState({});
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await quiz.fetch(name);
        setQuizData(data);
        setQuizQuestions(data.questions);
      } catch {
        setPageExists(false);
      }
    })();
  }, []);

  return (
    <main className="quiz-page mh100vh">
      {!pageExists && (<Navigate to='/*' />)}
      {quizQuestions.length > 0 && !isStarted && (<QuizStartWindow quizData={quizData} setIsStarted={setIsStarted}/>)}
      {isStarted && !isEnded && (
        <Quiz
          quizData={quizData}
          quizQuestions={quizQuestions}
          setIsEnded={setIsEnded}
          index={index}
          setIndex={setIndex}
          score={score}
          setScore={setScore}
          setTimeIsUp={setTimeIsUp}
        />
      )}
      {isEnded && (
        <QuizResultWindow
          score={score}
          totalQuestions={quizQuestions.length}
          setIsEnded={setIsEnded}
          setScore={setScore}
          setIsStarted={setIsStarted}
          setIndex={setIndex}
          timeIsUp={timeIsUp}
        />
      )}
    </main>
  );
}

export default QuizPage;
