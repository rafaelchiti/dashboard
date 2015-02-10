var React = require('react/addons');

require('./widget.styl');

var Widget = React.createClass({

  render() {
    var classes = 'widget ' + (this.props.className || '');

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Widget;
