import React from 'react';
import Router from 'react-router';
var {DefaultRoute, Route} = Router;

import Layout from './Layout';
import Home from '../Views/Home';
import Gitrepos from '../Views/Gitrepos';
import Hosts from '../Views/Hosts';
import Blog from '../Views/Blog';

var routes = (
  <Route name="app" path="/" handler={Layout}>
    <Route name="gitrepos" path="gitrepos" handler={Gitrepos}/>
    <Route name="hosting" path="hosting" handler={Hosts}/>
    <Route name="blog" path="blog" handler={Blog} />
    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = routes;
