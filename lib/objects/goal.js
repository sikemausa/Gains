'use strict';

const $ = require('jquery');
const Action = require('./action');
const firebase = require('firebase');
const database = firebase.database();

class Goal {
  constructor() {
    this.actions = [];
    this.goal = {};
    this.goals = [];
  }

  addActionListener(action) {
    var submitButton = $('#submit-button');
    var actionTitle = $('#action-form-action');
    // this === Goal()
    submitButton.on('click', (event) => {
      // this !== button because of arrow
      event.preventDefault();
      this.updateActionsArray(actionTitle.val());
    });
  }

  updateActionsArray(action) {
    var ref = database.ref('goals/0/goal one/actions');
    this.actions.push(action);
    ref.set(this.actions);
  }

  getGoal(goalNumber) {
    var ref = database.ref('goals/' + goalNumber);
    ref.on('value', (snapshot) => {
      console.log(snapshot.val());
      this.goal = snapshot.val();
    });
  }

  getGoals() {
    var ref = database.ref('goals');
    ref.on('value', (snapshot) => {
      console.log(snapshot.val());
      this.goals = snapshot.val();
    });
  }



}
let goal = new Goal();
goal.addActionListener();
goal.getGoal(0);
goal.getGoals();


//
// class Goal {
//   constructor(options) {
//     this.progress ,
//     this.title,
//     this.category,
//     this.actions = [],
//     this.status = 'uncomplete' // complete or uncomplete
//   }

//   removeAction() {
//
//   }
//   displayAction() {
//   }
//   deleteAction() {
//   }
//   searchAction() {
//   }
//   setGoal() {
//   }
//   editGoal() {
//   }
//   updateGoalStatus() {
//   }
//   completeGoal() {
//   }
// }
//
//
//
module.exports = Goal;
