import firebase from '../firebase';
import React, { Component } from 'react';
import SignIn from './SignIn';
import GoalRoom from './GoalRoom';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;
    if (user) {
      return (
        <section className="Application logged-in">
          <GoalRoom />
          Logged in
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
