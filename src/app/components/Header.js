'use strict';

import React from 'react';

export default class Header extends React.Component {
  render () {
    return(
      <div class="container">
        <div style="background-color:red;">
          <h1>My First Blog</h1>
            <h3>this is the header of my first blog, the entries will follow shortly </h3>
        </div>
      </div>
    );
  }
}
