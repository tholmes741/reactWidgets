var React = require('react');

var WeatherClock = React.createClass({
  getInitialState: function() {
    return { time: new Date() };
  },

  componentDidMount: function() {
    this.timer = setInterval(this.tick, 1000);
  },

  compnentWillUnmount: function () {
    clearInterval(this.timer);
  },

  tick: function() {
    this.setState({time: new Date()});
    // var that = this;
    // setInterval(function(){that.setState({ time: new Date()});}, 1000);
  },

  render: function() {
    var date = this.state.time;

    return (
      <div>{date.toString()}</div>
    );
  }
});




module.exports = WeatherClock;
