import firebase from '../firebase';
import React, { Component } from 'react';
import SignIn from './SignIn';
import UserInfo from './UserInfo';

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
          <UserInfo user={user}/>
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
