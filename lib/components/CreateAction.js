import React, { Component } from 'react';
import firebase from '../firebase';

export default class CreateAction extends Component{
  constructor() {
    super();
    this.state = {
      title: ''
    }
  }

  createAction(e) {
    e.preventDefault();
    const { title } = this.state;
    const { accessKey } = this.props;
    let currentUser = firebase.auth().currentUser.uid;
    const reference = firebase.database().ref(`${currentUser}/${accessKey}`);

    reference.push({ title });
    this.setState({ title: '' });
  }

  render() {
    return(
      <form
        className="CreateGoal"
        onSubmit={this.createAction.bind(this)}
      >
        <input
          className="AddActionUserInput"
          placeholder="Action"
          value={this.state.title}
          onChange={(e) => this.setState({
            title: e.target.value }
          )}
        />
        <input
          className="AddActionButton"
          type="submit"
          value="Add Action"
        />
      </form>
    )
  }
}
