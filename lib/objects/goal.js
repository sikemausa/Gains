'use strict';

const $ = require('jquery');
const Action = require('./action');
const firebase = require('firebase');


class Goal {
  constructor() {
    this.actions = {};
    this.title;
  }

  addAction(action) {
    let currentUser = firebase.auth().currentUser.displayName;
    var ref = firebase.database().ref(`${currentUser}/goals/actions`);
    ref.push(action);
  }

  fetchAction(goalNumber) {
    var ref = firebase.database().ref('goals/' + goalNumber);
    ref.on('value', (snapshot) => {
      this.actions = snapshot.val();
    });
  }

  render(actionTitle) {
    $('#action-container').append(`
      <li>
        <h2>${actionTitle}</h2>
      </li>
    `);
  }
}

module.exports = Goal;
