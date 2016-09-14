import React, { Component } from 'react';
import firebase, { provider } from '../firebase';


export default function ({user}) {
    return (
      <section className="UserInformation">

        <article className="UserPhoto">
          {/* <img src={user.photoURL} alt={`${user.displayName} Photograph`}/> */}
        </article>

        <article className="UserBio">
          <p>Hello {user.displayName} your butt looks great today?</p>
        </article>

        <article className="UserSignOut">
          <button className="SignOut" onClick={() => firebase.auth().signOut()}>
            Give Up
          </button>
        </article>

      </section>

    )
}
