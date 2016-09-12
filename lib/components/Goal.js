import React, { Component } from 'react';
import firebase from '../firebase';


export default class Goal extends Component {

  render() {
    const { dataId } = this.props;

    return (
      <article accessKey={dataId} className="GoalList">
        <h3>{this.props.title}</h3>
        <button onClick={() => { this.props.removeGoal(dataId)}}>
          Delete
        </button>
      </article>
    );
  }
}
