var React = require('react/addons');
var Router = require('react-router');
var routes = require('../../routes/routes');
var Link = Router.Link;

var RouteHandler = Router.RouteHandler;

require('../../../assets/stylesheets/application.styl');

var Application = React.createClass({

  render() {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }

});

module.exports = Application;
