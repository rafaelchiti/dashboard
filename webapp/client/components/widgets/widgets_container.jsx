import React from 'react/addons';
import WeatherWidget from './weather';
import ClockWidget from './clock';

require('./widgets_container.styl');

export default class WidgetsContainer extends React.Component {

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

}