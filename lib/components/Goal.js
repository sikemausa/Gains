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

 updateAction(event) {
   console.log(event.target);
   if(event.target.contentEditable !== true)
   event.target.contentEditable = true;
   else{event.target.contentEditable = false;}
 }

 componentWillUnmount() {
   this.reference.off();
 }

  loadActions(){
    return this.state.actions.map(action => {
      let title = action.title;
      let key = action.key;
      return(
        <section key={key}>
          <Action
            removeAction={this.removeAction}
            dataId={key}
            reference={this.reference}
            title={title}
            update={this.updateAction}
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
