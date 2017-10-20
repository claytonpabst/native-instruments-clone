
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import ProductsLanding from './components/Products/ProductsLanding.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ ProductsLanding } path='/products' exact />

    </Switch>
)
