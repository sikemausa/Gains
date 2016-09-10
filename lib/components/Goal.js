import React, { component } from 'react';
import firebase from '../firebase';
import GoalRoom from './CreateGoal';
import Goal from './Goal';

export default function ({ title, reference }) {
  return (
    <article className="GoalList">
      <h3>{title}</h3>
      <button onClick={() => reference.remove()} >
        Delete
      </button>
    </article>
  );
}
