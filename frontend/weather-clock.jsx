var React = require('react');

var WeatherClock = React.createClass({
  getInitialState: function() {
    return { time: new Date(),
            weather: '',
            temp: 0};
  },

  currentLocation: function() {
    var that = this;
    navigator.geolocation.getCurrentPosition( function(pos) {
      that.lat = pos.coords.latitude;
      that.long = pos.coords.longitude;
      that.updateWeather();
    });
  },

  componentDidMount: function() {
    this.timer = setInterval(this.tick, 1000);
    this.currentLocation();
  },

  updateWeather: function() {
    var that = this;
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
              "lat=" + this.lat + "&lon=" + this.long +
              "&appid=645c5d39c7603f17e23fcaffcea1a3c1";
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {

      var resp  = JSON.parse(request.responseText);
        that.setState({
          weather: resp.weather[0].main,
          temp: resp.main.temp - 273.25
        });
      } else {
        console.log("error");
      }
    };
    request.send();
  },

  componentWillUnmount: function () {
    clearInterval(this.timer);
  },

  tick: function() {
    this.setState({time: new Date()});
  },

  render: function() {
    var date = this.state.time;

    return (
      <div>
        <div>{date.toString()}</div>
        <div>Weather: {this.state.weather}</div>
        <div>Temperature in Celsius: {this.state.temp}</div>
      </div>
    );
  }
});




module.exports = WeatherClock;
