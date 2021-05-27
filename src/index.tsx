
import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './assets/spritesheet/sheet.css';
import './assets/_variables.css';
import 'xp.css/dist/98.css';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { UserProvider } from './app/contexts/UserContext';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>

      <App />
      
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
