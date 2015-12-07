var React = require('react'),
    ReactDOM = require('react-dom'),
    AutoComplete = require('./auto-complete.jsx'),
    WeatherClock = require('./weather-clock.jsx');

var names = ['Steph', 'Tommy', 'Asher', 'Brooke'];

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        < AutoComplete names={names}/>
        < WeatherClock />
      </div>
    );
  }
});





document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(< Widgets />, document.getElementById('main'));
});
