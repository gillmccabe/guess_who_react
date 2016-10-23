var React = require('react');
var Hugh = require('./Hugh.jsx');

var HughList = function( props ) {
  
  var hughList = props.hughs.map(function(hugh, index) {
    return (
      <li key={index}>
        <Hugh img={hugh.img} />
      </li>
    )
  })

  return(
    <div className='hugh-list'>
      {hughList}
    </div>
  )

}

module.exports = HughList;