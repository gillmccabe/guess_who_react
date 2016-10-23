var React = require('react');
var Hugh = require('./Hugh');

var HughList = React.createClass({

  createList: function(){
    var hughList = this.props.hughs.map(function(hugh, index){
      return <Hugh image={hugh.image} key={index}/>
    })
    return hughList;
  },

  render: function(){
    var hughList = this.createList();
    return (
        <div id='image-list'>{hughList}</div>
      )
  }

})


module.exports = HughList