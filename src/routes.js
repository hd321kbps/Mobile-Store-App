import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Phones from './containers/phones';
import Phone from './containers/phone';
import Basket from './containers/basket';

export default (
  <Switch>
    <Route path="/" component={Phones} exact />
    <Route path="/phones/:id" component={Phone} />
    <Route path="/categories/:id" component={Phones} />
    <Route path="/basket" component={Basket} />
  </Switch>
);
