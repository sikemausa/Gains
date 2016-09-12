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
    const { title } = this.state.title;
    const { reference } = this.props;

    reference.push({ title, isCompleted: false, dateAssigned: Date.now() });
    this.setState({ title: '' });
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
