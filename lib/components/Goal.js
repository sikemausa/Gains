import React, { component } from 'react';
import firebase from '../firebase';
// import GoalRoom from './CreateGoal';
// import CreateGoal from './CreateGoal';

export default function ({reference, title, key}) {
  return (
    <article className="GoalList">
      <div key={key}>
        <h3>{title}</h3>
        <button onClick={() => reference.remove()}>
        Delete
        </button>
      </div>
    </article>
  );
}
