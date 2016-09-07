'use strict';

const $ = require('jquery');
const Action = require('./action');
const firebase = require('firebase');


class Goal {
 constructor() {
   this.actions = [];
   this.goal = {};
   this.goals = [];
 }

 updateActionsArray(action) {
    let currentUser = firebase.auth().currentUser.displayName;
    var ref = firebase.database().ref(`${currentUser}/goals/actions`);
    this.actions.push(action);
    ref.push(this.actions);
  }

 getGoal(goalNumber) {
   var ref = firebase.database().ref('goals/' + goalNumber);
   ref.on('value', (snapshot) => {
     console.log(snapshot.val());
     this.goal = snapshot.val();
   });
 }

 getGoals() {
   var ref = firebase.database().ref('goals');
   ref.on('value', (snapshot) => {
     console.log(snapshot.val());
     this.goals = snapshot.val();
   });
 }
}

module.exports = Goal;
