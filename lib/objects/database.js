const firebase = require('firebase');
const $ = require('jquery');
// functions we need

// all()
// create() X
// update()
// destroy()

class Database {
  constructor() {
    this.state = {
      store : [],
    };
  }

reference(path){
  return firebase.database().ref(path);
  }

  create(path, value){
    this.reference(path).push(value);
  }

  update(path){
    var reference = firebase.database().ref(path);
    reference.on('value', (snapshot) => {
      snapshot.push(this.state.store);
    });
  }

}

module.exports = Database;
