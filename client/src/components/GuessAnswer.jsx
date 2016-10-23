var React = require('react');


var GuessAnswer = function(props) {

    if(props.response === null) {
      return <p></p>
    };
    return <p>{props.response}</p>

}
 module.exports = GuessAnswer;