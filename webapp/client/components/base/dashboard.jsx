var React = require('react/addons');
var WidgetsContainer = require('../widgets/widgets_container');

var Dashboard = React.createClass({

  render() {
    return (
      <div>
        <WidgetsContainer/>
      </div>
    );
  }

});

module.exports = Dashboard;
