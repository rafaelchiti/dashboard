var React = require('react/addons');
var WeatherWidget = require('./weather');
var ClockWidget = require('./clock');

require('./widgets_container.styl');

var WidgetsContainer = React.createClass({

  render() {
    return (
      <div className="widgetsContainer">
        <ClockWidget timezone="America/Los_Angeles"
          city="San Francisco" imageName="san_francisco"/>
        <ClockWidget timezone="America/Buenos_Aires"
          city="Buenos Aires" imageName="buenos_aires"/>
      </div>
    );
  }

});

module.exports = WidgetsContainer;
