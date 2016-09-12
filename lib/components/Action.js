import firebase from '../firebase';
import React, { Component } from 'react';

export default class Action extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      isCompleted: false,
      isEditing: false
    };
  }

    render(){
      return (<h1>{this.props.dataId}</h1>)
    }
  }
