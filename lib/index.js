'use strict';

require('./components/sample');
const firebase = require('./firebase').firebase;
const Goal = require('./objects/goal');
const Room = require('./objects/room');
const {
  $submitButton,
  $addGoalButton,
  $actionTitle,
  $signInButton,
  $userInfo,
  $goalInput
} = require('./elements');

let goal = new Goal();
goal.fetchAction(0);

let room = new Room();
room.fetchGoal(0);

$submitButton.on('click', (e) => {
  console.log('submit action click');
  e.preventDefault();
  goal.addAction($actionTitle.val());
  goal.render($actionTitle.val());
});

$addGoalButton.on('click', (e) => {
  console.log('submit goal click');
  e.preventDefault();
  room.addGoal($goalInput.val());
  room.render($goalInput.val());
});

$signInButton.on('click', () => {
  firebase.auth().signInWithPopup(provider);
});

firebase.auth().onAuthStateChanged((user) => {
  let currentUser = user;
  $signInButton.toggle(!currentUser);
  if (currentUser) {
    const {
      displayName,
      email
    } = currentUser;
    $userInfo.text(`Signed in as ${displayName} (${email}).`);
  } else {
    $userInfo.text('');
  }
});
