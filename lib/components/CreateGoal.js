import React, { Component } from 'react';
import firebase from '../firebase';
import { reference } from './GoalRoom';
import { title } from './GoalRoom';

export default class CreateGoal extends Component {
  constructor() {
    super();
    this.state = {
      title: 'hey'
    };
  }
  // const { title } = this.state;
  // const { reference } = this.props;

  createGoal(e) {
    e.preventDefault();
    reference.push({ title, isCompleted: false });
    this.setState({ title: ''});
  }

  render() {
    return (
      <form className="CreateGoal" onSubmit={this.createGoal.bind(this)}>
        <input placeholder="Goal"
          value={this.state.title}
          onChange={(e) => this.setState(
          { title: e.target.value})}
        />
        <input type="submit" value="Create Goal" />
      </form>
    )
  }
}
