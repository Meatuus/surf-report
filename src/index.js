import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    urlFirst="http://localhost:3001/api/shellybeach"
    urlSecond="http://localhost:3001/api/ballina"
    urlThird="http://localhost:3001/api/byronbay"
  />,
  document.getElementById('root'));
registerServiceWorker();
