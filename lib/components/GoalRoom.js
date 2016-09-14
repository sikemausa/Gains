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

  handleSearchInput(){
    this.setState({ searchedGoals: [] });
    let arr = [];
    for (var i = 0; i < this.state.goals.length; i++) {
      if(this.state.goals[i].title.toLowerCase().includes(this.state.search)){
        arr.push(this.state.goals[i]);
      }
    }
    this.setState({ searchedGoals: arr });
  }

  loadGoals() {
    let currentReference = this.reference;
      return this.state.goals.map(goal => {
        console.log(this.state.goals);
        let currentTitle = goal.title;
        let currentKey = goal.key;
        return(
          <section key={currentKey}>
            <Goal
              dataId={currentKey}
              reference={currentReference}
              title={currentTitle}
            />
            <button onClick={() => { this.reference.child(goal.key).remove()}}>
              Delete
            </button>
          </section>
        )
      })
  }

  loadFilteredGoals(){
      let currentReference = this.reference;
        return this.state.searchedGoals.map(goal => {
          console.log(this.state.searchedGoals);
          let currentTitle = goal.title;
          let currentKey = goal.key;
          return(
            <section key={currentKey}>
              <Goal
                dataId={currentKey}
                reference={currentReference}
                title={currentTitle}
              />
              <button onClick={() => { this.reference.child(goal.key).remove()}}>
                Delete
              </button>
            </section>
          )
        })
  }


  render() {
      if (this.state.searchedGoals.length > 0){
        return(
          <section className="GoalRoom">
          <input
          className="search"
          onKeyUp={(event) => {
            this.setState({ search: event.target.value.toLowerCase() });
            this.handleSearchInput();
          }}
          />
          <CreateGoal reference={ this.reference }/>
          <div>{this.loadFilteredGoals()}</div>
          </section>
        );
      }
      else {
        return(
          <section className="GoalRoom">
          <input
          className="search"
          onKeyUp={(event) => {
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
}
module.exports = GoalRoom;
