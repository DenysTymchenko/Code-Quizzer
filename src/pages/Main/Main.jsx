import React from 'react';
import HeroSection from '../../components/Sections/HeroSection';
import QuizzesSection from '../../components/Sections/QuizzesSection';
import './Main.css';

function Main() {
  return (
    <main className='main-page'>
      <HeroSection />
      <QuizzesSection />
    </main>
  );
}

export default Main;
