'use strict';
const $ = require('jquery');
const Action = require('./action');
const firebase = require('./firebase');
const React = require('react');
const ReactDOM = require('react-dom');

class Goal extends React.Component {
  constructor(user) {
    super();
    this.goal = {};
    this.goals = [];
    this.title = 'goal1';
    this.user = user;
  }

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
}

module.exports = Goal;
