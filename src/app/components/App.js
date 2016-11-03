"use strict";

import React from 'react';
import Sidebar from './Sidebar.js'
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'

export default class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <Sidebar />
        <Body />
        <Footer />
      </div>
    );
  }
}
