import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyAe8kTD_x_h9i7bEfyiwbFrkocStOLfU8s",
    authDomain: "react-101-b1d08.firebaseapp.com",
    databaseURL: "https://react-101-b1d08-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-101-b1d08",
    storageBucket: "react-101-b1d08.appspot.com",
    messagingSenderId: "4485401136",
    appId: "1:4485401136:web:5e5b4508fbeaea5e40fbf5",
    measurementId: "G-M81X5M12DX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export var database = firebase.database();