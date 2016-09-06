'use strict';

const $ = require('jquery');
// const Action = require('./lib/objects/action');
const consoleAction = require('./action');

// consoleAction();

class Goal {
  constructor(options) {
    this.progress,
    this.title,
    this.category,
    this.actions = [],
    this.status = 'uncomplete' // complete or uncomplete
  }
  addAction() {
  }
  removeAction() {
  }
  displayAction() {
  }
  deleteAction() {
  }
  searchAction() {
  }
  setGoal() {
  }
  editGoal() {
  }
  updateGoalStatus() {
  }
  completeGoal() {
  }
}



// module.exports = Goal;


module.exports = function consoleGoal() {
  console.log('goal');
};
