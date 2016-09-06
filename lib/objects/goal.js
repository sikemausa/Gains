'use strict';

const $ = require('jquery');
const Action = require('./action');

class Goal {
  constructor() {
    this.actions = [];
  }

  addAction() {
    var action = new Action();
    this.actions.push(action);
  }

  save(){

  }

}

let goal = new Goal();

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
