import React from 'react';
import ReactDOM from 'react-dom';
import Rout from './routes';
import firebaseApp from './Utils/firebase'


ReactDOM.render(
  <React.StrictMode>
    <Rout/>
  </React.StrictMode>,
  document.getElementById('root')
);

