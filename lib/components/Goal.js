import React, { component } from 'react';
import firebase from '../firebase';

export default function ({reference, title, key}) {
  return (
    <article className="GoalList">
      <div key={key}>
        <h3>{title}</h3>
        <button onClick={() =>
          reference.key.remove()
        }>
        Delete
        </button>
      </div>
    </article>
  );
}
