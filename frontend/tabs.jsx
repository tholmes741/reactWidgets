var React = require('react');

var Tabs = React.createClass({
  getInitialState: function(){
    return {
      selectedTab: 0
    };
  },

  changeTab: function (e) {
    this.setState({selectedTab: parseInt(e.target.id)});
  },

  render: function() {
    var that = this;
    var tabNames = this.props.tabList.map(function(object, idx){
      if (idx === that.state.selectedTab) {
        return (
          <li id={idx} key={idx}><strong>{object.title}</strong>
            <article>{object.content}</article>
          </li>
        );
      } else {
        return (<li id={idx} key={idx}>{object.title}</li>);
      }
    });
    console.log(tabNames);

    return(
      <ul onClick={this.changeTab}>
        {
          tabNames.map( function(name) {
            return name;
          })
        }
      </ul>
    );
  }

});



module.exports = Tabs;
