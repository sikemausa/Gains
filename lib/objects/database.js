const firebase = require('firebase');
const $ = require('jquery');
// functions we need

// all() X
// create()
// update()
// destroy()

class Database {
  constructor() {
    this.state = {
      store : [],
    };
  }

  // get reference(path){
  //   return firebase.database().ref(path);
  // }

  create(path, value){
    var reference = firebase.database().ref(path);
    reference.push(value);
  }

  update(){

  }

}

module.exports = Database;
