// 'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

class Action extends React.Component {
  constructor(options) {
    super();
    this.id = null;
    this.category = options.category;
  }

  // start(time = Date.now()) {
  //   this.id = time;
  //   return this.id;
  // }


  // add() {
  //   goal.actions.push();
  // }

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
