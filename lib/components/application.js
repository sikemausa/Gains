import firebase from '../firebase';
import React, { Component } from 'react';
import SignIn from './SignIn';
import GoalRoom from './GoalRoom';
import UserInfo from './UserInfo';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.addGoal = this.addGoal.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  addGoal(goal) {
    let currentUser = firebase.auth().currentUser.uid;
    var ref = firebase.database().ref(`${currentUser}/goals`);
    ref.push(goal);
  }

  render() {
    const { user } = this.state;
    if (user) {
      return (
        <section className="Application logged-in">
          <UserInfo user={user}/>
          <GoalRoom
           pushNewGoal={this.addGoal()}
          />
        </section>
      );
    }
    return (
      <section className="Application not-logged-in">
        <SignIn />
      </section>
    );
  }
}
