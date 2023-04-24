import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* for work with redux */}
    <React.StrictMode>
      <BrowserRouter> {/* for work with react-router */}
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
);
