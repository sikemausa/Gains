import React, { Component } from 'react';
import firebase from '../firebase';

export default class Actions extends Component{
  render() {
    return(
      <section>
        <h1>{this.props.title}</h1>
        <h1>{this.props.accessKey}</h1>
      </section>
    )
  }
}
