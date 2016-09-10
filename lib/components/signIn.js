import React, { Component } from 'react';
import firebase, { provider } from '../firebase';

export default class SignIn extends Component {
  render() {
    return (
      <section className="SignIn">
        <button onClick={() => firebase.auth().signInWithPopup(provider)}>
        Get Swoll
        </button>
      </section>
    );
  }
}
