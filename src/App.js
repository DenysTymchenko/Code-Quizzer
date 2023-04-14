import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Quizzes from './pages/QuizzesPage/QuizzesPage';
import QuizPage from './pages/QuizPage/QuizPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import NotFound from './pages/NotFound/NotFound';
import { getFavorites } from './store/modules/favorites/reducer';
import CreateNewQuiz from './pages/CreateNewQuiz/CreateNewQuiz';

function App() {
  const { favorites } = useSelector((state) => state.favoritesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
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
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/create" element={<CreateNewQuiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
