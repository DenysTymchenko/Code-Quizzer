import React from 'react';
import { Navigate } from 'react-router-dom';
import HeroSection from '../../components/Sections/HeroSection';
import QuizzesSection from '../../components/Sections/QuizzesSection';
import './Main.css';
import { useKonamiCode } from '../../hooks/UseKonamiCode';

function Main() {
  const konami = useKonamiCode();
  return (
    <main className='main-page'>
      <HeroSection />
      <QuizzesSection />
      {konami && (<Navigate to='/konami' />)}
    </main>
  );
}

export default Main;
