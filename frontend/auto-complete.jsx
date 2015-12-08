var React = require('react');

var AutoComplete = React.createClass({
  getInitialState: function() {
    return {searchString: ""};
  },

  change: function(e){
    this.setState({searchString: e.target.value});
  },

  handleNameClick: function(e) {
    this.setState({searchString: e.target.innerHTML});
  },

  render: function() {
    var names = this.props.names,
        searchString = this.state.searchString.trim().toLowerCase();

    if(searchString.length > 0){
      names = names.filter(function(name){
        return name.toLowerCase().match( searchString );
      });
    }

    return (
      <div>
        <input type="text"
               value={this.state.searchString}
               onChange={this.change}
               placeholder="Type Here"/>
             <ul onClick={this.handleNameClick}>
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
