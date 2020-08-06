import React from 'react';
import ReactDOM from 'react-dom';
import './images/index.css';
import App from './stylesheets/App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
