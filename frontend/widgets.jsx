var React = require('react'),
    ReactDOM = require('react-dom'),
    AutoComplete = require('./auto-complete.jsx'),
    WeatherClock = require('./weather-clock.jsx'),
    Tabs = require('./tabs.jsx');

var names = ['Steph', 'Tommy', 'Asher', 'Brooke'];

var tabList = [
  {title: "History", content: "This is the story of Christopher Columbus."},
  {title: "React101", content: "why?"},
  {title: "Counter", content: 0} ];

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <AutoComplete names={names} />
        <WeatherClock />
        <Tabs tabList={tabList} />
      </div>
    );
  }
});





document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(< Widgets />, document.getElementById('main'));
});
