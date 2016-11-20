"use strict";

import React from 'react';
import Sidebar from './Sidebar.js'
import Header from './Header.js'
import Entries from './Entries.js'
import Footer from './Footer.js'
import * as firebase from 'firebase'

export default class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <Sidebar />
        <Entries  content={this.props.contentRef}/>
        <Footer />
      </div>
    );
  }
}
