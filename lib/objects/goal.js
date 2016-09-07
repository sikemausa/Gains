'use strict';

const $ = require('jquery');
const Action = require('./action');
const Firebase = require('firebase');


class Goal {
 constructor() {
   this.actions = [];
   this.goal = {};
   this.goals = [];
   this.initFirebase();
 }

 initFirebase() {
   this.database = Firebase.database();
   this.auth = Firebase.auth();
  //  this.storage = firebase.storage();
 }

 updateActionsArray(action) {
    let currentUser = this.auth.currentUser.displayName;
    var ref = this.database.ref(`${currentUser}/goals/actions`);
    this.actions.push(action);
    ref.push(this.actions);
  }

 getGoal(goalNumber) {
   var ref = this.database.ref('goals/' + goalNumber);
   ref.on('value', (snapshot) => {
     console.log(snapshot.val());
     this.goal = snapshot.val();
   });
 }

 getGoals() {
   var ref = this.database.ref('goals');
   ref.on('value', (snapshot) => {
     console.log(snapshot.val());
     this.goals = snapshot.val();
   });
 }
}

module.exports = Goal;
