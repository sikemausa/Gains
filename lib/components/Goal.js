import React, { Component } from 'react';
import firebase from '../firebase';
import Actions from './Actions';
import CreateAction from './CreateAction';


export default class Goal extends Component {
  constructor() {
    super();
    this.state = {
      actions: [],
    };
  }



  render() {
    const { dataId } = this.props;

    return (
      <article accessKey={dataId} className="GoalList">
        <h3>{this.props.title}</h3>
        <CreateAction
          accessKey={dataId}
        />
        <Actions
          accessKey={dataId}
        />
        <button onClick={() => { this.props.removeGoal(dataId)}}>
          Delete
        </button>
      </article>
    );

  }
}
