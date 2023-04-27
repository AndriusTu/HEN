import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/tailwind.css';
import './styles/color.css';
import './styles/font.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
