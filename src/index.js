import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './assets/css/common.styl';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
