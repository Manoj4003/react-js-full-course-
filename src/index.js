import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';   // 👈 you forgot this line

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
      {/* 👈 now it knows what <App /> is */}
  </React.StrictMode>
);
