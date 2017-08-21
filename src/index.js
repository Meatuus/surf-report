import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App url="http://localhost:3001/api/surf" />, document.getElementById('root'));
registerServiceWorker();
