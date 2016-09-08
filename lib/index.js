'use strict';
<<<<<<< HEAD
const React = require('react')
const ReactDOM = require('react-dom')
const firebase = require('./firebase');
=======

>>>>>>> 7456ac9367866f1cbd52f3770e86c2cba973883b
require('./components/sample');
const firebase = require('./firebase').firebase;
const Goal = require('./objects/goal');
const Room = require('./objects/room');
<<<<<<< HEAD
let currentUser;

const  {
=======
const {
>>>>>>> 7456ac9367866f1cbd52f3770e86c2cba973883b
  $submitButton,
  $addGoalButton,
  $actionTitle,
  $signInButton,
  $userInfo,
  $goalInput
} = require('./elements');

<<<<<<< HEAD

const provider = firebase.auth.GoogleAuthProvider;


// goal.getGoal(0);
// goal.getGoals();

// let room = new Room();
// room.add('go to the olympics!');



$submitButton.on('click', (event) => {
  event.preventDefault();
  goal.add($actionTitle.val());
});


=======
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
>>>>>>> 7456ac9367866f1cbd52f3770e86c2cba973883b

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
    goal.user = displayName;
    console.log(goal.user);
  } else {
    $userInfo.text('');
  }
<<<<<<< HEAD
  return goal.user;
});

// signOut () {
//   return (
//     <section>
//       <button className="signOut" onClick={() => firebase.auth().signOut()}>
//         Sign Out
//       </button>
//     </section>
//   )
// }

let goal = new Goal();
goal.add('action');

// console.log(this);
// console.log(window.firebase.auth().currentUser.displayName);
// console.log(currentUser);
// console.log(currentUser.displayName);
=======
});
>>>>>>> 7456ac9367866f1cbd52f3770e86c2cba973883b
