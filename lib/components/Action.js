import firebase from '../firebase';
import React, { Component } from 'react';

export default class Action extends Component {
  render(){
    const { dataId } = this.props;
    return (
      <article accessKey={ dataId } className="ActionList">
        <h3>
          {this.props.title}
        </h3>
      </article>
    )
  }

}
