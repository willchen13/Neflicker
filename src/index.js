import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {GlobalStyles} from './global-styles.js';
// eslint-disable-next-line no-unused-vars
import {firebase} from './lib/firebase.prod.js';


ReactDOM.render(<>
    <GlobalStyles/>
    <App/>
  </>,
  document.getElementById('root')
);

