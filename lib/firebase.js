const firebase = require('firebase');

  var config = {
    apiKey: "AIzaSyBZBUkAhX5_JHTWbGKJAnmAcr-KpXsKO4I",
    authDomain: "gains-43a31.firebaseapp.com",
    databaseURL: "https://gains-43a31.firebaseio.com",
    storageBucket: "gains-43a31.appspot.com",
  };
  // firebase.initializeApp(config);

<<<<<<< HEAD


// module.exports = firebase;

module.exports = firebase.initializeApp(config);
=======
const provider = new firebase.auth.GoogleAuthProvider();
module.exports = { firebase, provider };
>>>>>>> 7456ac9367866f1cbd52f3770e86c2cba973883b
