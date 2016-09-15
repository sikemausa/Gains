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


  loadActions(){
    return this.state.actions.map(action => {
      return(
        <section className="Action" key={action.key}>
          <Action
            reference={this.reference.child(action.key)}
            actionUid={action.key}
            title={action.title}
            actionCompleted={action.isCompleted}
          />
        </section>
      )
    })
  }

  render() {
    const { dataId } = this.props;

    return (
      <section className="ActionRoom">
        <article accessKey={dataId} className="ActionList">
          <h3 className="goalTitle">
            {this.props.title}
          </h3>
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
