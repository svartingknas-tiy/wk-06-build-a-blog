import React from 'react'
import ReactDom from 'react-dom'
import Sidebar from './Sidebar.js'
import Header from './Header.js'
import Footer from './Footer.js'
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDWsAEg983OYIsK2cnPpv6qC9kWUjFpM2E",
  authDomain: "svartingknas-1296.firebaseapp.com",
  databaseURL: "https://svartingknas-1296.firebaseio.com",
  storageBucket: "svartingknas-1296.appspot.com",
  messagingSenderId: "449322754463"
}
firebase.initializeApp(config)

class App extends React.Component {

  constructor() {
  super();
  this.state = {
    month: "sergio"
  }
}

componentDidMount () {
  const rootRef = firebase.database().ref().child('blog');
  const monthRef = rootRef.child('month').child('december');

  monthRef.on('value', (snap) => {
    this.setState({
      month: snap.val()
    });
  });
}

  render () {
    return (
      <div className='container'>
        <Header />
        <Sidebar />
          <div className="container">
            <h2>Blog Entries</h2>
            <div className="col-md-9 entries">
               {this.state.month}
              </div>
            </div>
        <Footer />
      </div>
    );
  }
}
export default App;
