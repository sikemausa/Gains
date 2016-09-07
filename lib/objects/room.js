'use strict';

const $ = require('jquery');
// const Goal = require('./lib/objects/goal');
const firebase = require('../firebase');
const Goal = require('./goal');

// consoleGoal();

class Room {
  constructor() {
    this.user = 'blake';
  }

  add(goal) {
     let currentUser = firebase.auth().currentUser.displayName;
     var home = firebase.database().ref(`${currentUser}-home/all-goals/`);
     var goalKey = firebase.database().ref(`${currentUser}/`);
     home.push(goal);
     goalKey.push(goal);
   }


  resetPage() {
  }
  render() {
  }
  store() {
    // require Firebase if you use it to store
  }
  getStored() {
    // require Firebase if you use it to store
  }
}

// let goal = new Goal();
// goal.getGoal(0);
// goal.getGoals();

module.exports = Room;



// module.exports = function consoleRoom() {
//   console.log('room');
// };
