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
    return firebase.database().ref(`${currentUser}/goals`);
  }


  componentDidMount() {
    this.reference.on('value', (snapshot) => {
      let goals = snapshot.val();
      goals = splitObject(goals).map(goal => Object.assign({key: goal.key}, goal.value));
      console.log(goals);
      this.setState({
        goals
      });
    });
  }

  componentWillUnmount() {
    this.reference.off();
  }

  loadGoals() {
    return this.state.goals.map(goal => {
      return(
        <div key={goal.key}>
          <Goal reference={this.reference} title={ goal.title }/>
        </div>
      )
    })
  }

  render() {
    return(
      <section className="GoalRoom">

        <div>{this.loadGoals()}</div>
        <CreateGoal reference={ this.reference }/>
      </section>
    );
  }
}
