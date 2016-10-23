var React = require('react');

var Hugh = React.createClass({

  getInitialState: function(){
    return {
      selected: false
    }
  },

  handleClick: function(){
    var setSelected = !this.state.selected;
    this.setState({selected: setSelected});
  },

  render: function(){
    return (
     <img src={this.props.image} onClick = {this.handleClick}></img>
  )
}

})

module.exports = Hugh;