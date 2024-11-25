import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// **추가된 부분 시작**
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}
// **추가된 부분 끝**

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
