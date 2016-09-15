import React, { Component } from 'react';
import firebase from '../firebase';
import CreateAction from './CreateAction';
import Action from './Action';
const splitObject = require('split-object');


export default class Goal extends Component {
 constructor(props){
   super(props);
   this.state = {
     actions: [],
     title: '',
     isCompleted: false
   };
 }

 get reference() {
   let currentUser = firebase.auth().currentUser.uid;
   return firebase.database().ref(`${currentUser}/${this.props.dataId}`);
 }

 componentDidMount() {
   this.reference.on('value', (snapshot) => {
     let actions = snapshot.val();
     actions = splitObject(actions).map(action => Object.assign({key: action.key}, action.value));
     this.setState({
       actions
     });
   });
 }

 componentWillUnmount() {
   this.reference.off();
 }

 sortActions(){

  var newActions = this.state.actions.sort(function (a, b) {
    if (a.category > b.category) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
    });
  this.setState({ actions: newActions });
  }

  loadActions(){
    return this.state.actions.map(action => {
      return(
        <section className="Action" key={action.key}>
          <Action
            reference={this.reference.child(action.key)}
            actionUid={action.key}
            title={action.title}
            actionCompleted={action.isCompleted}
            category={action.category}
          />
        </section>
      )
    })
  }


  render() {
    const { dataId, category } = this.props;

    return (
      <section className="Goal">
        <article accessKey={dataId}
          className=" ActionList">
          <h3 className="goalTitle">
            {this.props.title}
          </h3>
          <button
            onClick={() => this.sortActions()}
          >Sort</button>
        </article>
        <article className="ActionRoom">
          <CreateAction
            reference={ this.reference }
            accessKey={ dataId }
          />
          <div>{this.loadActions()}</div>
        </article>
      </section>
    );
  }
}
