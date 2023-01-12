import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //Referente al archivo index.css
import App from './App'; //Referente al archivo App.js 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

