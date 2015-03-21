var React = require('react/addons');
var Router = require('react-router');
var routes = require('./routes/routes');

var Flux = require('flummox').Flux;

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(React.createElement(Handler), document.body);
});
