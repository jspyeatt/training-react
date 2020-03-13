import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import validator from 'validator';  // note we don't have ./ in front from 'validator'
// this flags the system to find the library from node_modules
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// sass-lang.com for scss.
const ExpenseDashboardPath = () => (
    <div>
        some text
    </div>
);
const routes = (
    <BrowserRouter>
        <Route path="/" component={ExpenseDashboardPath} />
    </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("appHere"));