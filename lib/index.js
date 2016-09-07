'use strict';

const firebase = require('./firebase');
require('./components/sample');
const validateInputFields = require('./validate-input-fields');
const renderSnippet = require('./render-gains');
const Goal = require('./objects/goal');
const Room = require('./objects/room');
let currentUser;

const  {
  $submitButton,
  $actionTitle,
  $signInButton,
  $userInfo
} = require('./elements');


const provider = firebase.auth.GoogleAuthProvider;


// goal.getGoal(0);
// goal.getGoals();

// let room = new Room();
// room.add('go to the olympics!');



$submitButton.on('click', (event) => {
  event.preventDefault();
  goal.add($actionTitle.val());
});



$signInButton.on('click', () => {
  firebase.auth().signInWithPopup(provider);
});

firebase.auth().onAuthStateChanged((user) => {
  currentUser = user;
  $signInButton.toggle(!currentUser);
  if (currentUser) {
    const {
      displayName,
      email
    } = currentUser;
    $userInfo.text(`Signed in as ${displayName} (${email}).`);
    goal.user = displayName;
    console.log(goal.user);
  } else {
    $userInfo.text('');
  }
  return goal.user;
});

let goal = new Goal(goal.user);
goal.add('action');

// console.log(this);
// console.log(window.firebase.auth().currentUser.displayName);
// console.log(currentUser);
// console.log(currentUser.displayName);
