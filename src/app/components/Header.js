'use strict';

import React from 'react';
import header from './Main.sass'

export default class Header extends React.Component {
  render () {
    return(
      <div className="container">
        <div className="header">
          <h1>My First Blog</h1>
            <h3>this is the header of my first blog, the entries will follow shortly </h3>
        </div>
        <hr />
      </div>
    );
  }
}
