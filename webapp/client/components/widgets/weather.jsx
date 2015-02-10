var React = require('react/addons');
var Widget = require('./widget');

require('./weather.styl');

var WeatherWidget = React.createClass({

  render() {
    return (
      <Widget className="weatherWidget">

        <div className="weatherWidget_mainSectionWrapper">
          <div className="weatherWidget_mainSection">

            <span className="_title">Buenos Aires</span>
            <div className="_todayInfo">
              <i className="_todayInfo_icon wi wi-day-lightning"></i>
              <span className="_todayInfo_temperature">28°C</span>
            </div>
          </div>
        </div>

        <div className="weatherWidget_bottomSection">
          <div className="_forecastColumn">
            <div className="_icon"><i className="wi wi-day-lightning"></i></div>
            <div className="_forecastColumn_text">FRI</div>
          </div>
          <div className="_forecastColumn">
            <div className="_icon"><i className="wi wi-day-lightning"></i></div>
            <div className="_forecastColumn_text">SAT</div>
          </div>
          <div className="_forecastColumn">
            <div className="_icon"><i className="wi wi-day-lightning"></i></div>
            <div className="_forecastColumn_text">SUN</div>
          </div>
        </div>

      </Widget>
    );
  },


});

module.exports = WeatherWidget;
