import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Quizzes from './pages/QuizzesPage/QuizzesPage';
import QuizPage from './pages/QuizPage/QuizPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import NotFound from './pages/NotFound/NotFound';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <>
        <Header/>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path="/quizzes" element={<Quizzes/>}/>
          <Route path="/quiz/:name" element={<QuizPage/>}/>
          <Route path="/favorites" element={<FavoritesPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </>
    </Provider>
  );
}

export default App;
