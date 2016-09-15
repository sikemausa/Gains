
require('./css/main');
// require('jquery');
import React from 'react';
import { render } from 'react-dom';
import Application from './components/Application.js';
import jquery from './jquery.js';


render(<Application />, document.getElementById('application'));
