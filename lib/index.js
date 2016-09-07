'use strict';

const firebase = require('./firebase');
require('./components/sample');
const validateInputFields = require('./validate-input-fields');
const renderSnippet = require('./render-gains');
const Goal = require('./objects/goal');
const Room = require('./objects/room');

const  {
  $submitButton,
  $actionTitle,
  $signInButton,
  $userInfo
} = require('./elements');

const provider = firebase.auth.GoogleAuthProvider;

let goal = new Goal();
goal.getGoal(0);
goal.getGoals();

$submitButton.on('click', (event) => {
  console.log('submit click');
  event.preventDefault();
  goal.updateActionsArray($actionTitle.val());
});

let currentUser;

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
  } else {
    $userInfo.text('');
  }
});
