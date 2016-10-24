var React = require('react');


var GuessAnswer = function(props) {

    if(props.response === null) {
      return <p></p>
    };

    return <h2>{props.response}</h2>

}
 module.exports = GuessAnswer;