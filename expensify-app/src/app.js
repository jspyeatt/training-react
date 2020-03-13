import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import validator from 'validator';  // note we don't have ./ in front from 'validator'
// this flags the system to find the library from node_modules
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// sass-lang.com for scss.
const ExpenseDashboardPage = () => (
    <div>
        some text

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
        <h1>404! - <Link to="/">Go Home</Link></h1>
    </div>
);
const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>home</NavLink><br />
        <NavLink activeClassName="is-active" to="/create">create</NavLink><br />
        <NavLink activeClassName="is-active" to="/edit">edit</NavLink><br />
        <NavLink activeClassName="is-active" to="/help">help</NavLink>
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact={true} path="/" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("appHere"));