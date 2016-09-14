import React, { Component } from 'react';
import firebase from '../firebase';
import CreateGoal from './CreateGoal';
import Goal from './Goal';
const splitObject = require('split-object');


export default class GoalRoom extends Component {
  constructor() {
    super();
    this.state = {
      goals: [],
      search: null,
      searchedGoals: []
    };
  }

  get reference() {
    let currentUser = firebase.auth().currentUser.uid;
    return firebase.database().ref(`${currentUser}/allGoals`);
  }

  removeGoal(uid) {
    this.reference.child(uid).remove();
    let currentUser = firebase.auth().currentUser.uid;
    firebase.database().ref(`${currentUser}/${uid}`).remove();
  }

  componentDidMount() {
    this.reference.on('value', (snapshot) => {
      let goals = snapshot.val();
      goals = splitObject(goals).map(goal => Object.assign({key: goal.key}, goal.value));
      this.setState({
        goals
      });
    });
  }

  componentWillUnmount() {
    this.reference.off();
  }

  // 4    only show goals in the loadGoals function if text matches

  // renderGoals(){
  //   debugger;
  //    if (this.state.searchedGoals === []) {
  //      return this.loadGoals(this.state.goals); }
  //    else { return this.loadGoals(this.state.searchedGoals); }
  // }

  loadGoals(goalsArray) {
    let currentReference = this.reference;
    // if (this.state.searchedGoals !== []) {
      return this.state.searchedGoals.map(goal => {
        let currentTitle = goal.title;
        let currentKey = goal.key;
        return(
          <section key={currentKey}>
            <Goal
              removeGoal={this.removeGoal}
              dataId={currentKey}
              reference={currentReference}
              title={currentTitle}
            />
            <button onClick={() => { this.removeGoal(currentKey)}}>
              Delete
            </button>
          </section>
        )
      })
    // } else {
    //
    //   return this.state.goals.map(goal => {
    //     let currentTitle = goal.title;
    //     let currentKey = goal.key;
    //     return(
    //       <section key={currentKey}>
    //         <Goal
    //           removeGoal={this.removeGoal}
    //           dataId={currentKey}
    //           reference={currentReference}
    //           title={currentTitle}
    //         />
    //         <button onClick={() => { this.removeGoal(currentKey)}}>
    //           Delete
    //         </button>
    //       </section>
    //     )
    //   })
    // }
  }

  handleSearchInput(){
    this.setState({ searchedGoals: [] })
    let arr = [];
    for (var i = 0; i < this.state.goals.length; i++) {
      if(this.state.goals[i].title.toLowerCase().includes(this.state.search)){
        arr.push(this.state.goals[i].title)
      }
    }
    return this.setState({ searchedGoals: arr });
  }

  render() {
    return(
      <section className="GoalRoom">
        <input
          className="search"
          onChange={(event) => {
            this.setState({ search: event.target.value.toLowerCase() });
            this.handleSearchInput();
          }}
        />
        <CreateGoal reference={ this.reference }/>
        <div>{this.loadGoals()}</div>
      </section>
    );
  }
}
module.exports = GoalRoom;
