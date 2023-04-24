/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Quizzes from './pages/QuizzesPage/QuizzesPage';
import QuizPage from './pages/QuizPage/QuizPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import CreateNewQuiz from './pages/CreateNewQuiz/CreateNewQuiz';
import KonamiCode from './pages/KonamiCode/KonamiCode';
import NotFound from './pages/NotFound/NotFound';
import QuizInProgress from './pages/QuizInProgress/QuizInProgress';
import { getFavorites } from './store/modules/favorites/reducer';

function App() {
  // setting favorites quizzes on page load.
  const { favorites } = useSelector((state) => state.favoritesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.favorites
      ? dispatch(getFavorites())
      : localStorage.setItem('favorites', JSON.stringify(favorites));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz/:name" element={<QuizPage />} />
        <Route path="/quiz/in-progress" element={<QuizInProgress />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/create" element={<CreateNewQuiz />} />
        <Route path="/konami" element={<KonamiCode />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
