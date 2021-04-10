
import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import 'xp.css/themes/98/_variables.scss';
import 'xp.css/dist/98.css';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { SystemProvider } from './app/contexts/SystemContext';
import Desktop from './app/components/screen/Desktop';

ReactDOM.render(
  <React.StrictMode>
    <SystemProvider>
      <Desktop />
    </SystemProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
