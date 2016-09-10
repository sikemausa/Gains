'use strict';
require('./components/sample');
// const firebase = require('./firebase').firebase;
const { firebase, provider } = require('./firebase');
const Goal = require('./objects/goal');
const Room = require('./objects/room');
const Database = require('./objects/database');
const {
  $submitButton,
  $addGoalButton,
  $actionTitle,
  $signInButton,
  $userInfo,
  $goalInput
} = require('./elements');

let goal = new Goal();
let room = new Room();
let database = new Database();
let currentUser;

$submitButton.on('click', (e) => {
  console.log('submit action click');
  e.preventDefault();
  database.create('somethingRandom', $actionTitle.val());
  goal.addAction($actionTitle.val());
  goal.render($actionTitle.val());
});

$addGoalButton.on('click', (e) => {
  console.log('submit goal click');
  e.preventDefault();
  database.create(`${goal.user}/goals`, $goalInput.val());
  room.render($goalInput.val());
});

$signInButton.on('click', () => {
  firebase.auth().signInWithPopup(provider);
});

firebase.auth().onAuthStateChanged((user) => {
  let currentUser = user;
  console.log(currentUser);
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
});
