import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
