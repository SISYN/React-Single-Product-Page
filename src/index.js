import React from 'react';
import ReactDOM from 'react-dom';

import ReactApp from './App';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/icon-packages/font-awesome-v4/min.css';
import './css/icon-packages/simple-line-icons/all.css';

import './css/template/fonts.css';
import './css/template/style.css';
import './css/template/devices/index.css';

// Unused but available assets
//import './css/index.css';
//import './css/alerts.css';
//import './css/frame.css';
//import './css/icon-packages/elegant-icons/min.css';
//import './css/icon-packages/font-awesome-v5/all.min.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReactApp />, document.getElementById('root'));
registerServiceWorker();
