import React from 'react';
import GreetingsSection from '../components/Sections/GreetingsSection';
import QuizzesSection from '../components/Sections/QuizzesSection';
import './Main.css';

function Main() {
  return (
    <main>
      <GreetingsSection />
      <QuizzesSection />
    </main>
  );
}

export default Main;
