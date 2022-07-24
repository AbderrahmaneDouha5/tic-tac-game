import React, { createRef } from 'react';
import ReactDOM from 'react-dom/client';

import Game from './game';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

