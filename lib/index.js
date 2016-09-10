import React from 'react';
import { render } from 'react-dom';
import Application from './components/Application.js';

require('../public/style.css');

render(<Application />, document.getElementById('application'));
