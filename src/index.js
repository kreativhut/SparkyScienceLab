import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Container } from './Components/expDustbinBox/Container';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Container /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
