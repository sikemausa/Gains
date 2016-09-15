import React, { Component } from 'react';
import firebase from '../firebase';
import { reference } from './GoalRoom';
import { title } from './GoalRoom';

export default class CreateGoal extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    };
  }

  createGoal(e) {
    e.preventDefault();
    const { title } = this.state;
    const { reference } = this.props;

    reference.push({ title, isCompleted: false, dateAssigned: Date.now() });
    this.setState({ title: '' });
  }

  render() {
    return (
      <section className="CreateGoal" >
        <input
          className="InputGoal"
          placeholder="Goal"
          value={this.state.title}
          onChange={(e) => this.setState(
          { title: e.target.value })}
        />
        <button className="SubmitNewGoal" onClick={this.createGoal.bind(this)}></button>
      </section>
    )
  }
}
