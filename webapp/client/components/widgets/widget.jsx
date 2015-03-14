import React from 'react/addons';

require('./widget.styl');

export default class Widget extends React.Component {

  render() {
    var classes = 'widget ' + (this.props.className || '');

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }

}
