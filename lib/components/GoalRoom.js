import React, { Component } from 'react';
import firebase from '../firebase';
import CreateGoal from './CreateGoal';
import Goal from './Goal';

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
      var goalArr = {title: goals.title, dateAssigned: goals.dateAssigned, isCompleted: goals.isCompleted};
      this.goalsArray.push(goalArr);
      this.setState({
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
