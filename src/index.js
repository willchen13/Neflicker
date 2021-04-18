import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './app';
import {GlobalStyles} from './global-styles.js';
// eslint-disable-next-line no-unused-vars
import {firebase} from './lib/firebase.prod.js';
import {FirebaseContext} from './context/firebase.js';


ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{firebase}}>
      <GlobalStyles/>
      <App/>
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);

