var React = require('react/addons');
var WeatherWidget = require('./weather');

require('./widgets_container.styl');

var WidgetsContainer = React.createClass({

  render() {
    return (
      <div className="widgetsContainer">
        <WeatherWidget/>
      </div>
    );
  }

});

module.exports = WidgetsContainer;
