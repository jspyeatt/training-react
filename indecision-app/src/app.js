import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';  // note we don't have ./ in front from 'validator'
                                    // this flags the system to find the library from node_modules
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById("appHere"));
