var React = require('react/addons');
var Widget = require('./widget');
var moment = require('moment-timezone');

require('./clock.styl');


var ClockWidget = React.createClass({

  getInitialState() {
    return getState(this.props);
  },

  render() {
    return (
      <Widget className="clockWidget">

        <div className="clockWidget_mainSectionWrapper" style={this.wrapperStyle()}>
          <div className="clockWidget_mainSection">
          </div>
        </div>

        <div className="clockWidget_bottomSection">
          <span className="_time">{this.state.time}</span>
          <span className="_city">{this.props.city}</span>
        </div>

      </Widget>
    );
  },

  wrapperStyle() {
    var url = require('../../../assets/images/cities/' + this.props.imageName + '.png');

    return {
      backgroundImage: `url(${url})`
    }
  }


});

getState = (props) => {
  return {time: moment().tz(props.timezone).format('HH:mm')};
}

module.exports = ClockWidget;
