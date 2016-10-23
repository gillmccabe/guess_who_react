var React = require('react');
var HughList = require('./HughList.jsx');

var GameBox = React.createClass({

  getInitialState: function(){
    return { 
    hughs: []
    }

  },

  componentDidMount: function() {
    var url = "api/hughs";
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = function() {
          console.log(request.responseText);
          var data = JSON.parse(request.responseText);
          this.setState({ hughs: data });
        }.bind(this);
        request.send();
  },

  render: function() { 
    return (
      <div>
         <h1>Guess Hugh</h1>
         <HughList hughs = {this.state.hughs} />
      </div>
      )
  }

})

module.exports = GameBox;