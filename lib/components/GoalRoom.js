import React, { Component } from 'react';
import firebase from '../firebase';
import CreateGoal from './CreateGoal';

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
      const goals = snapshot.val();
      console.log(snapshot.val());
      if (!goals) { this.state = this.setState({ goals: [] }); }
      console.log(snapshot.val().Object)
      // this.setState({
        // goals: Object.entries(goals)
        //   .map(([key, value]) => Object.assign({ key }, value))
      // });
    });
  }

  componentWillUnmount() {
    this.reference.off();
  }

  render() {
    return(
      <section className="GoalRoom">
        goalRoom
        <CreateGoal reference={ this.reference }/>
      </section>
    );
  }
}
