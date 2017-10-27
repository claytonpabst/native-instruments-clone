
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import ProductsLanding from './components/Products/ProductsLanding.js';
import LoginLanding from './components/Login/LoginLanding.js';
import AdminLanding from './components/Admin/AdminLanding.js';
import CartLanding from './components/Cart/CartLanding.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ ProductsLanding } path='/products' exact />
        <Route component={ LoginLanding } path='/login' exact />
        <Route component={ AdminLanding } path='/admin' exact />
        <Route component={ CartLanding } path='/cart' exact />

    </Switch>
)
