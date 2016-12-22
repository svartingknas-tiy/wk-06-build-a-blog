import React from 'react';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDWsAEg983OYIsK2cnPpv6qC9kWUjFpM2E",
  authDomain: "svartingknas-1296.firebaseapp.com",
  databaseURL: "https://svartingknas-1296.firebaseio.com",
  storageBucket: "svartingknas-1296.appspot.com",
  messagingSenderId: "449322754463"
}
firebase.initializeApp(config);

export default class Entries extends React.Component {
  constructor() {
  super()
  this.state = {
    name: "sergio morales"
  }
}

componentDidMount () {
  const nameRef = firebase.database().ref().child('object').child('name')

  nameRef.on('value', (snapshot) => {
    this.setState({
      name: snapshot.val()
    })
  })
}


  render () {
    return(
      <div className="container">
        <div className="row">
          <h2>Blog Entries</h2>
           {this.state.name}
          </div>
        </div>
    );
  }
}
