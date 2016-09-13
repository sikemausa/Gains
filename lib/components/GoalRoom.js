import React, { Component } from 'react';
import firebase from '../firebase';
import CreateGoal from './CreateGoal';
import Goal from './Goal';
const splitObject = require('split-object');


export default class GoalRoom extends Component {
  constructor() {
    super();
    this.state = {
      goals: []
    };
  }

  get reference() {
    let currentUser = firebase.auth().currentUser.uid;
    return firebase.database().ref(`${currentUser}/allGoals`);
  }



  removeGoal(uid) {
    this.reference.child(uid).remove();
    let currentUser = firebase.auth().currentUser.uid;
    firebase.database().ref(`${currentUser}/${uid}`).remove();
  }

  componentDidMount() {
    this.reference.on('value', (snapshot) => {
      let goals = snapshot.val();
      goals = splitObject(goals).map(goal => Object.assign({key: goal.key}, goal.value));
      this.setState({
        goals
      });
    });
  }

  componentWillUnmount() {
    this.reference.off();
  }

  loadGoals() {
    let currentReference = this.reference;
    return this.state.goals.map(goal => {
      let currentTitle = goal.title;
      let currentKey = goal.key;
      return(
        <section key={currentKey}>
          <Goal
            removeGoal={this.removeGoal}
            dataId={currentKey}
            reference={currentReference}
            title={currentTitle}
          />
          <button onClick={() => { this.removeGoal(currentKey)}}>
            Delete
          </button>
        </section>
      )
    })
  }

  render() {
    return(
      <section className="GoalRoom">
        <CreateGoal reference={ this.reference }/>
        <div>{this.loadGoals()}</div>
      </section>
    );
  }
}
