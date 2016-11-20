'use strict';

import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDWsAEg983OYIsK2cnPpv6qC9kWUjFpM2E",
  authDomain: "svartingknas-1296.firebaseapp.com",
  databaseURL: "https://svartingknas-1296.firebaseio.com",
  storageBucket: "svartingknas-1296.appspot.com",
  messagingSenderId: "449322754463"
};
firebase.initializeApp(config);

const app = document.getElementById('app');

render(<App />, app);
