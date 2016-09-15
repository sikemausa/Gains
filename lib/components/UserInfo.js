import React, {Component} from 'react';
import firebase, {provider} from '../firebase';

export default function ({user}) {

  return (
    <section className="UserInformation">
      <article className="UserBio">
      </article>
      <button className="SignOut" onClick={() => firebase.auth().signOut()}>
        Give Up
      </button>
    </section>
  )
}
