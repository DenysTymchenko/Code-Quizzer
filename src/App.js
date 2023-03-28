import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Quizzes from './pages/QuizzesPage/QuizzesPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/quizzes' element={<Quizzes />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
