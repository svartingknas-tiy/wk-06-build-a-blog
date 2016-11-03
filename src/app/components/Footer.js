'use strict';

import React from 'react';
import Styles from './Main.sass'

export default class Footer extends React.Component {
  render () {
    return(
      <div className="container">
          <hr />
        <footer className="container-fluid" >
          <p>Footer data</p>
        </footer>
    </div>
    );
  }
}
