// 'use strict';

const $ = require('jquery');

class Action {
  constructor(options) {
    this.id = null;
    // this.scheduledTime = this.scheduled();
    // this.note = [],
    // this.details
  }

  start(time = Date.now()) {
    this.id = time;
    return this.id;
  }

  add() {
    goal.actions.push();
  }

  // scheduled(duration) {
  //   return this.scheduledTime + duration;
  // }

  // addNote() {
  // }
  // editDetails() {
  // }
}
//

// module.exports = function consoleAction() {
//     console.log('action');
//   };
// //
module.exports = Action;
// module.exports = consoleAction;
