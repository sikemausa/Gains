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
     isCompleted: false,

   };
 }

 get reference() {
   let currentUser = firebase.auth().currentUser.uid;
   return firebase.database().ref(`${currentUser}/${this.props.dataId}`);
 }

 removeAction(uid) {
   this.reference.child(uid).remove();
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
    let currentReference = this.reference;
    return this.state.actions.map(action => {
      let currentTitle = action.title;
      let currentKey = action.key;
      return(
        <section key={currentKey}>
          <Action
            removeAction={this.removeAction}
            dataId={currentKey}
            reference={currentReference}
            title={currentTitle}
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
          <h3>
            {this.props.title}
          </h3>
        </article>
        <article className="ActionRoom">
          <CreateAction reference={ this.reference } accessKey={dataId}/>
          <div>{this.loadActions()}</div>
        </article>
      </section>
    );
  }
}
