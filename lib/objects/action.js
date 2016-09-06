'use strict';

const $ = require('jquery');

class Action {
  constructor(options) {
    this.startTime = null;
    // this.scheduledTime = this.scheduled();
    // this.note = [],
    // this.details
  }

  start(time = Date.now()) {
    this.creationTime = time;
    return this.startTime;
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
