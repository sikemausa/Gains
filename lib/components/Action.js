import firebase from '../firebase';
import React, { Component } from 'react';

export default class Action extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.title,
      isCompleted: false,
      isEditing: false
    };
  }



  createAction(e) {
    e.preventDefault();
    const { accessKey } = this.props;
    let currentUser = firebase.auth().currentUser.uid;
    const reference = firebase.database().ref(`${currentUser}/${accessKey}`);
    reference.push({ title: this.state.title, isCompleted: false, isEditing: false });
  }

  renderEditField(){
    const { actionUid } = this.props;
       if (this.state.isEditing) {
         return (
           <input
           onChange={(e) => this.setState({title: e.target.value})}
           value={this.state.title}
           onBlur={(e) => {
            this.setState({isEditing: false});
            this.props.reference.set({ title: this.state.title});
            }
           }
          />
         );
       } else {
         return (
           <section className="ActionRoom">
             <article accessKey={ actionUid } className="ActionList">
               <h3 onClick={() => this.setState({ isEditing: true })}>
                 {this.state.title}
               </h3>
               <button onClick={() => this.props.reference.remove()}>Delete</button>
               <button onClick={() => {
                 this.setState({ isCompleted: true });
                 this.props.reference.set({ isCompleted: this.state.isCompleted });
                }
                }
               >
               Complete
               </button>


             </article>
           </section>
      )
    }
  }

  render(){
    return(
      <section className="CreateAction">
        <input placeholder="Action"
          value={this.state.title}
          onChange={(e) => this.setState(
          { title: e.target.value })}
        />
        <button onClick={(e) => this.createAction(e)}>Add Action</button>
        <article className="Action Container">
          {this.renderEditField()}
        </article>
      </section>
    );
  }
}
