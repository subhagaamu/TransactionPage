import 'core-js/stable';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TransactionForm from './Components/TransactionForm';
import TransactionHistory from './Components/TransactionHistory';


ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}></Route>
        <Route path='/Transaction-Form' component={TransactionForm}></Route>
        <Route path='/Transaction-History' component={TransactionHistory}></Route>
        <Route path='/Edit' component={TransactionForm}></Route>
    </Switch></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
