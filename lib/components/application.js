import React, { component } from 'react';
import firebase from '../firebase';

import signIn from './signIn'

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;
    if (user) {
      return (
        <section className="Application logged-in">
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
