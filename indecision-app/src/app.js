import validator from 'validator';  // note we don't have ./ in front from 'validator'
                                    // this flags the system to find the library from node_modules.

import React from 'react';
import ReactDOM from 'react-dom';

import subtract, {square,add} from './utils.js';
// import './person.js';
import isSenior, { canDrink, isAdult } from './person.js';
console.log("app.js is running square " + square(4) + ' add ' + add(4,3) + " subtract " + subtract(9,4));
console.log("I'm 57 can I drink? " + canDrink(57) + " am I an adult " + isAdult(57));
console.log("is 57 a senior " + isSenior(64));

console.log("validator email " + validator.isEmail("john.pyeatt@singlewire.com"));

const template = <p>testing hete</p>;
ReactDOM.render(template, document.getElementById('appHere'));