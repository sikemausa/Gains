import React, { Component } from 'react';
import firebase from '../firebase';

export default class CreateAction extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      isCompleted: false,
    };
  }

  createAction(e) {
    e.preventDefault();
    const { title } = this.state;
    const { accessKey } = this.props;
    let currentUser = firebase.auth().currentUser.uid;
    const reference = firebase.database().ref(`${currentUser}/${accessKey}`);
    reference.push({ title: title });
    this.setState({ title: title });
  }

  render() {
    return (
      <form className="CreateAction" onSubmit={this.createAction.bind(this)}>
        <input placeholder="Action"
          value={this.state.title}
          onChange={(e) => this.setState(
          { title: e.target.value})}
        />
        <input type="submit" value="Create Action" />
      </form>
    )
  }
}
