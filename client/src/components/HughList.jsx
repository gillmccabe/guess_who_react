
var React = require('react');

var HughList = function( props ) {
  
  var hughList = props.hughs.map(function(hugh, index) {
    return (
      <li key={index}>
      </li>
    )
  })

  return(
    <div className='hugh-list'>
    
    </div>
  )

}

module.exports = HughList;