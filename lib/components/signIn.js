import React, { Component } from 'react';
import firebase, { provider } from '../firebase';

class SignIn extends Component {
  render() {
    return (
      <section className="SignIn">
        <button onClick={() => firebase.auth().signInWithPopup(provider)}>
        Sign In
        </button>
      </section>
    );
  }
}

export default SignIn
