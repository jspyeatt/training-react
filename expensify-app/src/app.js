import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import validator from 'validator';  // note we don't have ./ in front from 'validator'
// this flags the system to find the library from node_modules
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// sass-lang.com for scss.
const ExpenseDashboardPage = () => (
    <div>
        some text
        <p><a href="/create">create</a></p>
        <p><a href="/edit">edit</a></p>
        <p><a href="/help">help</a></p>
    </div>
);
const AddExpensePage = () => (
    <div>
        add expense component
    </div>
);
const EditExpensePage = () => (
    <div>
        edit expense component
    </div>
);
const HelpPage = () => (
    <div>
        help
    </div>
);
const NotFoundPage = () => (
    <div>
        <h1>404!</h1>
    </div>
);
const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("appHere"));