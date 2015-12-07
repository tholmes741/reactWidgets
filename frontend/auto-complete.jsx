var React = require('react');

var AutoComplete = React.createClass({
  getInitialState: function() {
    return {string: ""};
  },

  change: function(e){
    this.setState({string: e.target.value});
  },

  insertVal: function(e) {
    this.setState({string: e.target.innerHTML});
  },

  render: function() {
    var names = this.props.names,
        string = this.state.string.trim().toLowerCase();

    if(string.length > 0){
      names = names.filter(function(name){
        return name.toLowerCase().match( string );
      });
    }

    return (
      <div>
        <input type="text" value={this.state.string} onChange={this.change} placeholder="Type Here"/>
        <ul onClick={this.insertVal}>
          {
            names.map(function(name, idx) {
              return <li key={idx}>{name}</li>;
            })
          }
        </ul>
      </div>
    );
  }
});





module.exports = AutoComplete;
