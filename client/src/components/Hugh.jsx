var React = require('react');
var classNames = require('classnames');

var Hugh = React.createClass({

  getInitialState: function(){
    return {
      discarded: false
    }
  },

  handleClick: function(){
    var setDiscarded = !this.state.discarded;
    this.setState({discarded: setDiscarded});
  },

  render: function(){
    var classes = classNames({discarded: this.state.discarded});
    return (
     <img className={classes} src={this.props.image} onClick={this.handleClick}></img>
  )
}

})

module.exports = Hugh;