// import './utils.js';

import {square,add} from './utils.js';
import './person.js';
import { canDrink, isAdult } from './person.js';
console.log("app.js is running " + square(4) + ' ' + add(4,3));
console.log("I'm 57 can I drink? " + canDrink(57) + " am I an adult " + isAdult(57));
