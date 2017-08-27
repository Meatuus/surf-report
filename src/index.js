import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    first="Shelly Beach"
    urlFirst="http://localhost:3001/api/shellybeach"
    second="Ballina"
    urlSecond="http://localhost:3001/api/ballina"
    third="Byron Bay"
    urlThird="http://localhost:3001/api/byronbay"
  />,
  document.getElementById('root'));
registerServiceWorker();
