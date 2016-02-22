import React from 'react';
import Router from 'react-router';
var {DefaultRoute, Route} = Router;

import Layout from './Layout';
import Home from '../Views/Home';
import Gitrepos from '../Views/Gitrepos';
import Hosts from '../Views/Hosts';

var routes = (
  <Route name="app" path="/" handler={Layout}>
    <Route name="gitrepos" handler={Gitrepos}/>
    <Route name="hosting" handler={Hosts}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = routes;
