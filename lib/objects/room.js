'use strict';

const $ = require('jquery');
const Goal = require('./goal');
const firebase = require('firebase');

class Room {
  constructor() {
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

  getActions() {
  }
  resetPage() {
  }
  render() {
  }
  store() {
  }
  getStored() {
  }
}

module.exports = Room;
