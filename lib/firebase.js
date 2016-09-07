const firebase = require('firebase');

  var config = {
    apiKey: "AIzaSyBZBUkAhX5_JHTWbGKJAnmAcr-KpXsKO4I",
    authDomain: "gains-43a31.firebaseapp.com",
    databaseURL: "https://gains-43a31.firebaseio.com",
    storageBucket: "gains-43a31.appspot.com",
  };
  firebase.initializeApp(config);



module.exports = firebase;

// module.exports = firebase.initializeApp(config);
