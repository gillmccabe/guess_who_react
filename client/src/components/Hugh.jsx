var React = require('react');

var Hugh = React.createClass({

  getInitialState: function() {
    return { 
      picked: false 
    }
  },

  handleClick: function() {
    var setPicked = !this.state.picked;
    this.setState({picked: setPicked});
  },

  render: function(){
    return(
      <div>
        <img img={this.props.img} onClick = {this.handleClick}></img>
      </div>
    )
  }


})

module.exports = Hugh;