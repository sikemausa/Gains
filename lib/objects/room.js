'use strict';
const $ = require('jquery');
<<<<<<< HEAD
// const Goal = require('./lib/objects/goal');
const consoleGoal = require('./goal');
const React = require('react');Z
const ReactDOM = require('react-dom');

=======
const Goal = require('./goal');
const firebase = require('firebase');
>>>>>>> 7456ac9367866f1cbd52f3770e86c2cba973883b

class Room extends React.Component {
  constructor() {
<<<<<<< HEAD
    super();
=======
    this.time = Date.now();
    this.goals = [];
  }

  addGoal(goal) {
    let currentUser = firebase.auth().currentUser.displayName;
    var ref = firebase.database().ref(`${currentUser}-${goal}`);
    ref.push(goal);
  }

  fetchGoal(goalNumber) {
    // let currentUser = firebase.auth().currentUser.displayName;
    var ref = firebase.database().ref(`goals/${goalNumber}`);
    ref.on('value', (snapshot) => {
      this.goals = snapshot.val();
    });
  }

  render(goalTitle) {
    $('#goal-container').append(`
      <li>
        <h1>${goalTitle}</h1>
      </li>
    `);
  }

  getActions() {
  }
  resetPage() {
  }
  store() {
  }
  getStored() {
>>>>>>> 7456ac9367866f1cbd52f3770e86c2cba973883b
  }

  // signOut () {
  //   return (
  //     <section>
  //       <button className="signOut" onClick={() => firebase.auth().signOut()}>
  //         Sign Out
  //       </button>
  //     </section>
  //   )
  // }
}


// consoleGoal();
//
// class Room {
//   constructor() {
//     this.time = Date.now();
//     this.goals = [];
//   }
//   resetPage() {
//   }
//   render() {
//   }
//   store() {
//     // require Firebase if you use it to store
//   }
//   getStored() {
//     // require Firebase if you use it to store
//   }
// }

module.exports = Room;
