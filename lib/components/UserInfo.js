import React, { Component } from 'react';
import firebase, { provider } from '../firebase';


export default function ({user}) {
    return (
      <section className="UserInformation">
        <article className="UserBio">
          <p>Hey {user.displayName} are you ready to make some gains?</p>
        </article>

        <button className="SignOut" onClick={() => firebase.auth().signOut()}>
          Give Up
        </button>
      </section>
    )
}
