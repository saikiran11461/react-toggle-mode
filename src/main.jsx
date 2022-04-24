import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToggleContextProvider } from './contexts/Toggle';

ReactDOM.render(
  <React.StrictMode>
    <ToggleContextProvider>
    <App />
    </ToggleContextProvider>
  </React.StrictMode>,
   document.getElementById('root')
);