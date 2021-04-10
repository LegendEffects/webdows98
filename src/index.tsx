import 'normalize.css/normalize.css';
import 'xp.css/themes/98/_variables.scss';
import 'xp.css/dist/98.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Desktop from './stage/desktop/Desktop';

ReactDOM.render(
  <React.StrictMode>
    <Desktop />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
