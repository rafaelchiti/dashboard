import React from 'react/addons';
import Router from 'react-router';
import routes from '../../routes/routes';

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

require('../../../assets/stylesheets/application.styl');

export default class Application extends React.Component {

  render() {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }

}