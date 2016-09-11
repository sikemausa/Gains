import React, { Component } from 'react';
import firebase from '../firebase';
import CreateGoal from './CreateGoal';

export default class GoalRoom extends Component {
  constructor() {
    super();
    this.state = {
      goals: []
    };
    this.goalsArray = [];
  }

  get reference() {
    let currentUser = firebase.auth().currentUser.uid;
    return firebase.database().ref(`${currentUser}/goals`);
  }

  componentDidMount() {
    this.reference.on('child_added', (snapshot) => {
      const goals = snapshot.val();
      var goal = {title: goals.title, dateAssigned: goals.dateAssigned, isCompleted: goals.isCompleted};
      this.goalsArray.push(goal);
      this.setState({
        // goals: this.state.goals.push(goal).bind(this)
        goals: this.goalsArray
      });
    });
  }

  componentWillUnmount() {
    this.reference.off();
  }

  loadGoals() {
    return this.state.goals.map(goal => {
      return(
        <div key={goal.dateAssigned}>
          <h1>{goal.title}</h1>
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
