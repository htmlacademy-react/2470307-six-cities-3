import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.jsx';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from './constants.js';
import { store } from './store/index.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App
        authorizationStatus = { AuthorizationStatus.NoAuth }
      />
    </Provider>
  </React.StrictMode>
);
