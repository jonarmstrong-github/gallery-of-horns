import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App/App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
//DIRECTS TO <div id="root"></div> IN INDEX.HTML

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
