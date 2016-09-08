'use strict';
const $ = require('jquery');
const Action = require('./action');
<<<<<<< HEAD
const firebase = require('./firebase');
const React = require('react');
const ReactDOM = require('react-dom');
=======
const firebase = require('firebase');
>>>>>>> 7456ac9367866f1cbd52f3770e86c2cba973883b

class Goal extends React.Component {
  constructor(user) {
    super();
    this.goal = {};
    this.goals = [];
    this.title = 'goal1';
    this.user = user;
  }

<<<<<<< HEAD
  render() {
    console.log("Render");

    return (
      <div className="GoalList">
        <h1>Goals:</h1>
      </div>
    );
  }
}

// class Goal {
//  constructor(user) {
//    this.goal = {};
//    this.goals = [];
//    this.title = 'goal1';
//    this.user = user;
//  }
 // hold actions
 // put actions in storage
 // get actions out of storage

 add(action) {
    // let currentUser = firebase.auth().currentUser.displayName;
    var goalKey = firebase.database().ref(`${this.user}-${this.title}/`);
    goalKey.push(action);
  }

 getGoal(goalNumber) {
   var ref = firebase.database().ref('goals/' + goalNumber);
   ref.on('value', (snapshot) => {
     console.log(snapshot.val());
     this.goal = snapshot.val();
   });
 }

 var goalList = firebase.database().ref(`${this.user}-${this.title} + postId + '/starCount'`);
 starCountRef.on('value', function(snapshot) {
   updateStarCount(postElement, snapshot.val());
 });

 getGoals() {
   var ref = firebase.database().ref('goals');
   ref.on('value', (snapshot) => {
     console.log(snapshot.val());
     this.goals = snapshot.val();
   });
 }
=======
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
>>>>>>> 7456ac9367866f1cbd52f3770e86c2cba973883b
}

module.exports = Goal;
