import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';  // note we don't have ./ in front from 'validator'
                                    // this flags the system to find the library from node_modules
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// sass-lang.com for scss.

ReactDOM.render(<p>This is my boiler plate.</p>, document.getElementById('appHere'));
