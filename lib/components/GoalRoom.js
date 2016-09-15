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
      search: '',
      searchedGoals: null
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
      this.setState({ goals });
    });
  }

  componentWillUnmount() {
    this.reference.off();
  }

  handleSearchInput(){
    this.setState({ searchedGoals: [] });
    let arr = [];
    if(this.state.search !== ''){
      for (var i = 0; i < this.state.goals.length; i++) {
        if(this.state.goals[i].title.toLowerCase().includes(this.state.search)){
          arr.push(this.state.goals[i]);
        }
      }
    }
    console.log(this.state);
    this.setState({ searchedGoals: arr });
  }

  handleClearSearchInput() {
    this.setState({ search: '', searchedGoals: null });
  }

  loadGoals() {
    let goaltype = this.state.goals;
    let currentReference = this.reference;

    if (this.state.searchedGoals) { goaltype = this.state.searchedGoals; }
      return goaltype.map(goal => {
        let currentTitle = goal.title;
        let currentKey = goal.key;
        return(
          <section key={currentKey}>
            <Goal
              dataId={currentKey}
              reference={currentReference}
              title={currentTitle}/>
            <button onClick={() => { this.reference.child(goal.key).remove()}}>
              Delete
            </button>
          </section>
        )
        this.setState({ searchedGoals: [] });
    })
  }

  render() {
    return(
      <section className="GoalRoom">
        <CreateGoal reference={ this.reference }/>
        <article className="SearchRoom">
          <input
            className="search"
            onChange={(event) => {
            this.setState({ search: event.target.value.toLowerCase() }); }}
            value={this.state.search}/>
          <button className="searchButton" onClick={() => this.handleSearchInput()}>Search</button>
          <button className="clearButton" onClick={() => this.handleClearSearchInput()}>Clear</button>
        </article>
        <article>{this.loadGoals()}</article>
      </section>
    );
  }
}
module.exports = GoalRoom;
