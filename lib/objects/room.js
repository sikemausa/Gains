'use strict';
const $ = require('jquery');
// const Goal = require('./lib/objects/goal');
const consoleGoal = require('./goal');
const React = require('react');Z
const ReactDOM = require('react-dom');


class Room extends React.Component {
  constructor() {
    super();
  }

  // signOut () {
  //   return (
  //     <section>
  //       <button className="signOut" onClick={() => firebase.auth().signOut()}>
  //         Sign Out
  //       </button>
  //     </section>
  //   )
  // }
}


// consoleGoal();
//
// class Room {
//   constructor() {
//     this.time = Date.now();
//     this.goals = [];
//   }
//   resetPage() {
//   }
//   render() {
//   }
//   store() {
//     // require Firebase if you use it to store
//   }
//   getStored() {
//     // require Firebase if you use it to store
//   }
// }

module.exports = Room;



// module.exports = function consoleRoom() {
//   console.log('room');
// };
