var React = require('react/addons');
var Router = require('react-router');
var App = require('../components/base/application');
var Dashboard = require('../components/base/dashboard');
var Settings = require('../components/base/settings');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route handler={App} path="/">
    <Route name="dashboard" handler={Dashboard} />
    <Route name="settings" handler={Settings} />
    <DefaultRoute handler={Dashboard} />
  </Route>
);


module.exports = routes;
