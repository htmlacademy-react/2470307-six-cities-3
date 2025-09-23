import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.jsx';
import { Setting } from './constants.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesCount = { Setting.placesCount }
    />
  </React.StrictMode>
);
