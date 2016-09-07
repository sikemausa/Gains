'use strict';

const firebase = require('./firebase');
require('./components/sample');
const validateInputFields = require('./validate-input-fields');
const renderSnippet = require('./render-gains');
const Goal = require('./objects/goal');
const Room = require('./objects/room');

const  {
  // $snippetsSection,
  // $newSnippetForm,
  // $newSnippetTitle,
  // $newSnippetCode,
  // $newSnippetSubmit,
  $submitButton,
  $actionTitle,
  $signInButton,
  $userInfo
} = require('./elements');

const provider = new firebase.auth.GoogleAuthProvider();

// $newSnippetTitle.on('keyup', validateInputFields);
// $newSnippetCode.on('keyup', validateInputFields);

// $newSnippetForm.on('submit', (e) => {
//   e.preventDefault();
//
//   const title = $newSnippetTitle.val();
//   const code = $newSnippetCode.text();
//
//   $snippetsSection.append(renderSnippet(title, code));
//
//   $newSnippetTitle.val('');
//   $newSnippetCode.val('');
// });

let goal = new Goal();
goal.getGoal(0);
goal.getGoals();

$submitButton.on('click', (event) => {
  // this !== button because of arrow
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
  // $newSnippetForm.toggle(!!currentUser);

  // console.log(user);

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


// const snippetsReference = firebase.database().ref().child('snippets');
//   snippetsReference.on('value', (snapshot) => {
//   const snippet = snapshot.val();
//   console.log(snippet);
// });
