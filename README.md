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



