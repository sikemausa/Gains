import React, { Component } from 'react';
import firebase from '../firebase';

export default class CreateAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      isCompleted: false,
      isEditing: false,
      category: 'activity'
    };
  }

  createAction(e) {
    e.preventDefault();
    const { title } = this.state;
    const { category } = this.state;
    const { accessKey } = this.props;
    let currentUser = firebase.auth().currentUser.uid;
    const reference = firebase.database().ref(`${currentUser}/${accessKey}`);
    reference.push(this.state);
    this.setState({ title: title, category: category });
  }

  render() {
    return (
      <form className="CreateAction" onSubmit={this.createAction.bind(this)}>
        <input placeholder="Action"
          value={this.state.title}
          onChange={(e) => this.setState(
          { title: e.target.value })}
        />
        <select
          value={this.state.value}
          onChange={(e) => this.setState(
        { category: e.target.value })}
        >
          <option value="activity">Activity</option>
          <option value="recovery">Recovery</option>
          <option value="nutrition">Nutrition</option>
          <option value="personal">Personal</option>
        </select>
        <input type="submit" value="Create Action" />
      </form>
    )
  }
}
