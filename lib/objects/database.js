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

// all(){
//   debugger;
//     this.reference().once('value').then(function(snapshot) {
//       const current = snapshot.val();
//       if(!current){return this.state({store: []});}
//       else {return this.state( {store: [snapshot.val()]}); }
//     });
// }

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
