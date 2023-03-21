import React from 'react';
import GreetingsSection from '../components/Sections/GreetingsSection';
import QuizzesSection from '../components/Sections/QuizzesSection';
import './Main.css'

class Main extends React.Component{
  render() {
    return (
      <main>
        <GreetingsSection/>
        <QuizzesSection/>
      </main>
    )
  }
}

export default Main;
