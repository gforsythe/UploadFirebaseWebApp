import React from 'react';
import ReactDOM from 'react-dom';
import Rout from './routes';
import {auth, userAuthState} from './Utils/firebase'


ReactDOM.render(
  <React.StrictMode>
    <Rout/>
  </React.StrictMode>,
  document.getElementById('root')
);


userAuthState(auth, (user)=>{
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
    console.log("there is a user it is:",uid);
  } else {
    // User is signed out
    // ...
    console.log("there is no user");
  }
})

