import React, { Component } from 'react';
import firebase from '../firebase';

export default class GoalRoom extends Component {
  constructor() {
    super();
    this.state = {
      goals: []
    };
  }

  get reference() {
    return firebase.database().ref(`user-goals/${this.props.uid}`);
  }

  componentDidMount() {
    this.reference.on('value', (snapshot) => {
      const goals = snapshot.val();
      debugger;
      console.log(goals);
      if (!goals) { this.state = this.setState({ goals: [] }); }
      this.setState({
        goals: Object.entries(goals)
          .map(([key, value]) => Object.assign({ key }, value))
      });
    });
  }

  componentWillUnmount() {
    this.reference.off();
  }

  render() {
    return(
      <section className="GoalRoom">
        goalRoom
      </section>
    )
  }

}
