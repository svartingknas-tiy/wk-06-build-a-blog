"use strict";

import React from 'react';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'

export default class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
