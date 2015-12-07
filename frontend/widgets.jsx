var React = require('react'),
    ReactDOM = require('react-dom'),
    AutoComplete = require('./auto-complete.jsx');


var names = ['Steph', 'Tommy', 'Asher', 'Brooke'];

var Widgets = React.createClass({
  render: function () {
    return(
      < AutoComplete names={names}/>
    );
  }
});





document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(< Widgets />, document.getElementById('main'));
});
