'use strict';

import React from 'react';
import Styles from './Main.sass'
import * as firebase from 'firebase'

export default class Body extends React.Component {

  constructor() {
  super();
  this.state = {
    content: ""
  };
}
componentDidMount(){
const rootRef = firebase.database().ref().child('0');
const contentRef = rootRef.child('content');
contentRef.on('value', snap => {
  this.setState({
    content: snap.val()
  });
});
}
  render () {
    return(
      <div className="container">
        <div className="row">
          <h2>Blog Entries</h2>
            {this.state.content}
          </div>
        </div>
    );
  }
}
