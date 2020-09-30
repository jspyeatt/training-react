# Video 4 - Install VisualCode
code.visualstudio.com

# Video 5 - Install node.js and yarn

www.nodejs.org yarnpkg.com

node - javascript on the server

node command is now installed

node -v  prints the version

npm - node package manager

npm install -g yarn   - installs yarn globally

yarn --version

# Video 6 - Hello React

http://indecision.mead.io  - final indecision app

http://links.mead.io/indecision - final source code

jsx - javascript xml - templating syntax provided by react

# Video 7 - Setting up Web Server

project directory is /indecision-app

mkdir a /public directory and put in an index.html

```html
<html>
<head>
<meta charset='UTF-8'>
<title>Indecision</title>
</head>
<body>Here we are</body>
</html>
```

Install liveserver - development web server

yarn global add live-server   # installs live-server globally.

live-server -v   - prints version

live-server public   - serves the public directory on port 8080

# Video 8 - using react

```html
<body>
<div id="apptag"></dev>

<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js">/<script>
<script src="/scripts/app.js"></script>

</body>
```
mkdir public/scripts

Once you load the page you should be able to see React and ReactDOM objects in the javascript console.

## JSX - javascript syntax extension, provided by react

```javascript
var template = <p>this is jsx</p>;
var appRoot = document.getElementById('apptag');
ReactDOM.render(template, appRoot);  // first arg is what to render, second is where to render it.
```

This will not render correctly because the code hasn't been compiled down to regular javascript.

So we have to compile jsx with something (babeljs.io). Which compiles down to ES5 code which is what the browser recognizes.

You can go to the `try it out` link on babeljs.io to type in jsx and have it show you the javascript created.

# Video 9 - Setting up Babel
babeljs.io
babel has presets - we are using react and es2015 - presets are plugins you can use with babel.

react preset allows us to use jsx in our code.
env preset gives us es2017 options

## install babel

```bash
yarn global add babel-cli@6.24.1
babel --help
```
## creating project
```bash
cd indecision-app
yarn init
```
and answer questions. It will create a brand new package.json file based on your answers.

### add dependencies
```bash
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
```
This isn't a global install. It is specific for the project. This updates the dependencies in package.json and creates node_modules
directory.
`yarn.lock` is an auto-generated file and lists out the node dependencies and where it got them.

### begin app
```bash
mkdir src
```
and create app.js file in src. It is the code we write. The generated code will end up in public/scripts/ directory.

```bash
babel src/app.js --out-file public/scripts/app.js --presets=env,react
```
```bash
babel src/app.js --out-file public/scripts/app.js --presets=env,react --watch  # sets up watch of src tree
```
```bash
live-server public
```

If you delete `node_modules` directory you can run `yarn install` looks through package.json to recreate node_modules directory.

# video 10 - hello react

```javascript
var template = (
<div>
  <h1>IndecisionApp</h1>
  <p>This is text</p>
</div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
```
# Video 11 - JSX Expressions

```javascript
var user = {
  name: 'John',
  age: 57
};
var userName = 'Mike';
var template = (
<div>
  <h1>{userName}</h1>  // just adds as a javascript expression.
  <h1>{user.age}</h1> 
</div>
);
```

# video 12 - Conditional Rendering
```javascript
function getLocation(loc) {
   if (location) {
      return location;
   else {
      return "Unknown";
   }
}

function getGender(gender) {
   if (gender) {
      return <p>Gender: {gender}</p>
   }
   return;  // return undefined. 
}

var app = {
   title: 'Indecision App',
   subtitle: 'Trust the computer',
   options: ['one', 'two']
}

var template = {
  <div>
    <h1>{app.title</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>1</li>
      <li>2</li>
    </ol>
  </div>
}
var user = {
  name: 'John',
  age: 57,
  location: 'Verona',
  gender: 'male'
};

var userName = 'Mike';
var template = (
<div>
  {app.subtitle && <p>app.subtitle</p>}  // CONDITIONALLY DISPLAY SUBTITLE ONLY IF IT EXISTS
  <p>{app.options.length > 0 ? 'Here are your options' : 'No opitons'}</p>
  <h1>{user.name} ? user.name : 'unknown'</h1>
  {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}  // CONDITIONALLY DISPLAY AGE ONLY IF >= 18
  <h1>Location: {getLocation(user.location)}</h1>

  {getGender(user.gender)} // ONLY DISPLAY GENDER FIELD IF IT ISN"T UNDEFINED
</div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
```

# video 13 - ES6 aside - const and let

```javascript
var nameVar = 'Andrew';
var nameVar = 'John';                     // javascript allows you to reassign and redefine everything about the value with var. This is bad.
console.log('nameVar=' + nameVar);

let nameLet = 'Fred';
nameLet = 'Steve';     // I can reassign the value, but I can't redefine it. If I add second let nameLet = 'Bill'; It will fail to compile.
console.log('nameLet = ' + nameLet);

const nameConst = 'Ken';
nameConst = 'Joe';           // This will fail because you cannot reassign nor redefine a const.
console.log('nameConst = ' + nameConst);

```

Scoping is a bit different as well.

var, let and const are function-scoped.

```javascript
function getPetName() {
   var petName = 'Hal';
   return petName;
}
console.log('petName = ' + petName);   // will not work because petName variable isn't in scope.
```

let and const are block-scoped.

```javascript
var fullName = 'John Pyeatt';
if (fullName) {
   var firstName = fullName.split(' ')[0];
   console.log('firstName = ' + firstName);
}
console.log('firstName=' + firstName);   // var firstName is actually available here even though it is outside the block because vars aren't block-scoped.
                                         // let and const are not. So if firstName were a let or const you'd get an undefined.
```

# video 14 - ES6 aside - arrow function

```javascript
// es5 function
const square = function(x) {
   return x * x;
};

// es6 function  - arrow functions are always anonymous. So you always have to assign it to a variable.
const squareArrow = (x) => {
	return x * x;
};
```

Arrow function expression syntax
```javascript
const squareArrow = (x) => x * x;          // more concise version of the arrow function squareArrow
                                           // we don't even specify a return statement.

```

# video 15 - ES6 aside - arrow functions 2

```javascript
// es5 function
const add = function(a,b) {
  console.log(arguments);    // arguments isn't accessible in arrow functions.
  return a+b;
};

```

`this` keyword is no longer bound.
```javascript
// object with es5 function
const user = {
  name: 'John',
  cities: ['Philly', 'New York'],
  printPlacesLived: function() {
    console.log('name=' + this.name);          // es5 function, this keyword is bound to the function.
  }
};

const user = {
  name: 'John',
  cities: ['Philly', 'New York'],
  printPlacesLived: function() {
    console.log('name=' + this.name);          // es5 function, this keyword is bound to the function.
    this.cities.forEach(city) => {
       console.log(this.name + ' has lived in ' + city);    // arrow function can reference list in this foreach, can't reference this keyword with es5 function.
    };
  }
};

```
```javascript
const multiplier {
   numbers: [1, 5, 3, 10],
   multiplyBy: 3,
   multiply () {
    return this.numbers.map((n) => this.multiplyBy * n);
   }
}
console.log(multiplier. multiply());
```

# video 16 - React Events and Attributes
```javascript
let count = 0;
const addOne = () => {
  console.log('add one');
  count++;
};
const minusOne = () => {
  count--;
};
const reset = () => {
  count = 0;
};
const templateTwo = {
  <div>
    <h1>Count: {count}</h1>
 <!-- IMPORTANT: the 'class' attribute is NOT used here, you have to use 'className' with JSX -->
    <button onClick={addOne} className='button'>+1</button>  <br/>
    <button onClick={minusOne} className='button'>-1</button> <br/>
    <button onClick={reset} className='button'>reset</button> <br/>
   </div>
};

const appRoot = document.getElementById('app');
ReactCOM.render(templateTwo, appRoot);
```
Very useful link https://reactjs.org/docs/dom-elements.html. All Supported HTML Attributes header lists all the REACT names for html attributes.
