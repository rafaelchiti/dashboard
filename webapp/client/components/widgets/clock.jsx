import React from 'react/addons';
import Widget from './widget';
import moment  from 'moment-timezone';

require('./clock.styl');


export default class ClockWidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = getState(props);
  }

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
  }

  wrapperStyle() {
    var url = require('../../../assets/images/cities/' + this.props.imageName + '.png');

    return {
      backgroundImage: `url(${url})`
    }
  }


};

var getState = (props) => {
  return {time: moment().tz(props.timezone).format('HH:mm')};
}

