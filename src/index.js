import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'


require('firebase/firestore')
  var firebaseConfig = {
    apiKey: "AIzaSyBDKp7BzxVRHM7AFpsyieyG36zA59Ah3eg",
    authDomain: "evernote-cb0f1.firebaseapp.com",
    databaseURL: "https://evernote-cb0f1.firebaseio.com",
    projectId: "evernote-cb0f1",
    storageBucket: "evernote-cb0f1.appspot.com",
    messagingSenderId: "498359815722",
    appId: "1:498359815722:web:43da31c91254e39855fd53",
    measurementId: "G-LX00KJZZQC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
