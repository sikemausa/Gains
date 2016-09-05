'use strict';

const $ = require('jquery');
// const Goal = require('./lib/objects/goal');
const consoleGoal = require('./goal');

consoleGoal();

class Room {
  constructor() {
    this.time = Date.now();
    this.goals = [];
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

// module.exports = Room;



module.exports = function consoleRoom() {
  console.log('room');
};
