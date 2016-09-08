'use strict';
const $ = require('jquery');
class Action {
  constructor(options) {
    this.id = null;
    this.category = options.category;
    this.title;
  }
  start(time = Date.now()) {
    this.id = time;
    return this.id;
  }
  // add() {
  //   goal.actions.push();
  // }
  // scheduled(duration) {
  //   return this.scheduledTime + duration;
  // }
}
module.exports = Action;
