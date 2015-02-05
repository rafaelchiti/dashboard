var React = require('react/addons');
var App = require('./components/application')

React.render(
  React.createElement(App),
  document.querySelector('#js-reactMountingPoint')
);
