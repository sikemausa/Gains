'use strict';
const $ = require('jquery');
const Action = require('./action');
const firebase = require('firebase');

// class Goal extends React.Component {
//   constructor(user) {
//     super();
//     this.goal = {};
//     this.goals = [];
//     this.title = 'goal1';
//     this.user = user;
//   }


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
        <p>${actionTitle}</p>
      </li>
    `);
  }

}

module.exports = Goal;
