'use strict';

import React from 'react';
import Styles from './Main.sass'

export default class Sidebar extends React.Component {
  render (){
    return (
          <div className="col-sm-2 sidenav">
              <ul className="nav nav-pills nav-stacked">
                <h3 className="archive">Archive</h3>
                <li>December</li>
                <li>November</li>
                <li>October</li>
                <li>September</li>
                <li>August</li>
                <li>July</li>
                <li>June</li>
                <li>May</li>
                <li>April</li>                      <li>March</li>
                <li>February</li>
                <li>January</li>
              </ul>
            </div>
    );
  }
}
