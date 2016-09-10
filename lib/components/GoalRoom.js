import React, { Component } from 'react';
import firebase from '../firebase';
import CreateGoal from './CreateGoal';

export default class GoalRoom extends Component {
  constructor() {
    super();
    this.state = {
      goals: []
    };
  }

  get reference() {
    return firebase.database().ref(`${currentUser}/goals`);
      // 'gains-43a31/3fZ0srkCZ8N4tsEXlW4T0YoUc2n2/goals/-KRLGvISjhXiMTjRkpiQ'
  }

  componentDidMount() {
    this.reference.on('value', (snapshot) => {
      const goals = snapshot.val();
      if (!goals) { this.state = this.setState({ goals: [] }); }
      this.setState({
        goals: Object.entries(goals)
          .map(([key, value]) => Object.assign({ key }, value)),
      });
    });
  }

  componentWillUnmount() {
    this.reference.off();
  }


  render() {
    // const goals = this.state.goals.map((goal) => <Goal {...goal} reference={this.reference.child(goals.key)}/> );
    //
    return(
      <section className="GoalRoom">
      hey
        <CreateGoal />
      </section>


    // return(
    //   <section className="GoalRoom">
    //     <div>
    //       Rooooooooom
    //     </div>
    //   </section>
    );
  }
}
