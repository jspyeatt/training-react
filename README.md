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

# Video 17 - Manual Data binding

When we have changes in the logic we need to re-render the components of the page. So change the rendering of templateTwo to a 
function and call that function when the page firsts loads and anytime an event happens.

```javascript
const addOne = () => {
  console.log('add one');
  count++;
  renderCounterApp();   // called everytime onclick.
};
const renderCounterApp = () => {
	const templateTwo = {
	  <div>
	    <h1>Count: {count}</h1>
	 <!-- IMPORTANT: the 'class' attribute is NOT used here, you have to use 'className' with JSX -->
	    <button onClick={addOne} className='button'>+1</button>  <br/>
	    <button onClick={minusOne} className='button'>-1</button> <br/>
	    <button onClick={reset} className='button'>reset</button> <br/>
	   </div>
	};
   ReactCOM.render(templateTwo, appRoot);
};
renderCounterApp(); // this is the initial load of the page

```

react uses a virtual dom algorithms in javascript so even though it appears you are re-rendering the entire page. react is smart
enough to only re-render what's changed.

# video 18 - Forms and Inputs

```javascript

const onFormSubmit = (e) => {
   e.preventDefault(); // prevents full page reload and allows client to handle event.
   console.log("onFormSubmit()");

   // get the value the user typed
   const option = e.target.elements.fred.value;
   if (option) {
      app.options.push(option);
      e.target.elements.fred.value = '';   // reset to empty in the form itself after we've added to options array.
   }
};
const template = {
  <form onSubmit={onFormSubmit} >      // THIS IS WHERE WE ADD THE FUNCTION REFERENCE TO CALL onsubmit
    <input type="text" name="fred"/>
    <button>Add Option</button>
  </form>
};
```
We handle the form submit on the client and not submit to a new server request.
Google Search: React DOM events SyntheticEvents is the object. You will see supported events.
We want onSubmit event.

# video 19 - arrays

jsx supports arrays by default.

```javascript
const valuesArray = ["FRED", "GEORGE", "STEVE"];
{
   valuesArray.map((v) => {
      return <p key={v}>{v}</p>;   // you need key= because react requires each dom element to have unique key/id.
   });  
}
```

# video 20 - Picking an option

Conditionally disable a button.

```javascript
<button disabled={options.length != 0}></button>
```

# video 21 - Building visibility toggle
```javascript

```

# video 24 - ES6 Classes Part 1
```javascript
class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
        console.log(name);
    }
    getGreeting() {
        // return 'Hello ' + this.name;
        return `Hi. I am ${this.name} I'm ${this.age}`;  // ES6 template with backticks
    }
    getDescription() {
        return `I'm ${this.name}. I'm ${this.age}`;
    }
}
class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }
    getGreeting() {
        let grt = super.getGreeting();
        if (!! this.home) {                         // conditionally append if home isn't undefined.
            grt += ` I'm from ${this.home}`;
        }
        return grt;
    }
}
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !! this.major;  // negate twice so it is Not undefined.
    }
    getDescription() {
        return `My major is ${this.major}`;
    }
}

const me = new Person('John Pyeatt', 57);
console.log(me.getGreeting() + " " + me.getDescription());
const other = new Person();
console.log(other.getGreeting());
const sam = new Student('Sam', 22, 'Comp Sci');
console.log(sam + " " + sam.hasMajor() + " " + sam.getDescription());

```

# video 26 - Creating a react component

react components are es6 classes. First character must be upper case.

React components require we implement the render() method.

```javascript
class Header extends React.Component {    // extends React.Component.
   render() {
      return <p>This is from Header</p>;
   };
}
class Action extends React.Component {
   render() {
      return {
        <div>
           <button>What should I do?</button>
        </div>
      };
   }
}

class Options extends React.Component {
   render() {
      return {
         <div>
            <button>Do this</button>
         </div>
      };
   }
}

class AddOption extends React.Component {
   render() {
      return {
         <div>
            <form>
               <input type='submit'/>
            </form>
         </div>
      };
   }
}

// we now have a react component  (Header) being rendered.
const jsx = {
   <div>
     <Header/>
     <Action/>
     <Options/>
     <AddOption/>
   </div>
};
ReactDOM.render(jsx, document.getElementById('app'));
```

# video 27 - nesting components
Create the indecision app component

```javascript
class IndecisionApp extends React.Component {
   render() {
      return {
         <div>
           <Header/>
           <Action/>
           <Options/>
           <AddOption/>
         </div>
      }
   }
}

class Option extends React.Component {
   render() return {
      <div>Option</div>
    };
}
class Options extends React.Component {
   render() {
      return {
         <div>
            <Option/>
         </div>
      };
   }
}
ReactDOM.render(<IndecisionApp/>, document.getElementId('app'));

```
# video 28 Component props
```javascript
class Header extends React.Component {    // extends React.Component.
   render() {
      return {
        <div>
           <h1>{this.props.title}</h1>
           <p>{this.props.subtitle}</p>
       </div>
      };
   };
}
class IndecisionApp extends React.Component {
   const title="IndecisionApp";
   const subtitle = "trust me";
   const options = ["Thing one", "Thing two"];
   render() {
      return {
         <div>
           <Header title={title} subtitle={subtitle}/>
           <Action/>
           <Options options={options}/>
           <AddOption/>
         </div>
      }
   }
}
class Option extends React.Component {
   render() return {
      <div>Option: {this.props.optionText}</div>
    };
}
class Options extends React.Component {
   options = this.props.options;
   render() {
      return {
         <div>
            {this.props.options.map((opt) => <Option key={opt} optionText={opt}/>}
         </div>
      };
   }
}
```

# video 29 - Events and Methods
Create self containing class with a class method to handle events.

```javascript
class Action extends React.Component {
   handlePick() {
      console.log("Action picked");
   }
   render() {
      return {
        <div>
           <button onClick={this.handlePick}>What should I do?</button>
        </div>
      };
   }
}
class Options extends React.Component {
   options = this.props.options;
   removeAll() {
      console.log("removeALl");
   }
   render() {
      return {
         <div>
            <button onClick={this.removeAll}>Remove All</button>
            {this.props.options.map((opt) => <Option key={opt} optionText={opt}/>}
         </div>
      };
   }
}

class AddOption extends React.Component {
   handleAddOption(e) {
      e.preventDefault();  // prevents form submission
      const option=e.target.elements.option.value.trim();
      if (option) {
        alert(option);
      }
   }
   render() {
      return {
         <div>
            <form onSubmit={this.handleAddOption}>
               <input type="text" name="option"/>
               <button>Add Option</button>
            </form>
         </div>
      };
   }
}
```

# video 30 - method binding
You have to do special changes to be able to reference `this` binding in the method removeAll(). We lose context
to `this` in functions.

```javascript
const obj = {
  name: "STEVE",
  getName() {
    return this.name;
  }
};
const getName = obj.getName.bind({:name: "Bill"});
console.log(getName());  // this will work.
```
Search: mdn bind - more information on how bind() works.

```javascript
class Options extends React.Component {
   constructor(props) {
      super(props);  // must call super
      this.removeAll = this.removeAll.bind(this);  // This is the money line: This binds the this object to removeAll().
   }
   options = this.props.options;
   removeAll() {
      console.log("removeALl");
   }
   render() {
      return {
         <div>
            <button onClick={this.removeAll}>Remove All</button>
            {this.props.options.map((opt) => <Option key={opt} optionText={opt}/>}
         </div>
      };
   }
}
```

# video 31 component state - intro
Allows components to manage data. When the data changes, the component can re-render automatically.

You need to start with a default set of data values for the object.

<Counter/>
{
   count: 0
}

Component gets rendered with default values. But we don't call render() manually.

Then the state of the component changes because of something. So count goes to 1.

Then the component re-renders.

# video 32 Adding state to counter app part 1

```javascript
class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        // doing the binding so we always have props available.
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0,
            name: "john"
        };
    }
    handleAddOne() {
        console.log("handleAddOne");
        this.setState((prevState) => {     //  this.setState allows us to manipulate the state
                                           //  we define a function to return the new state.
                                           //  Note we are only updating the count value. The
                                           //  state.name is unchanged.
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        console.log("handleMinusOne");
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        console.log("handleReset");
        this.setState(() => {
            return {
                count: 0
            };
        });
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }

    
}
ReactDOM.render(<Counter />, document.getElementById("appHere"));
```

# video 33 - Adding state to counter app part 2


