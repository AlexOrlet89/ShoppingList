import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ItemProvider } from './context/ItemProvider';

render(
  <React.StrictMode>
    <ItemProvider>
      <App />
    </ItemProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
