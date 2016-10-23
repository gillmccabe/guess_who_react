var React = require('react');

var QuestionAnswer = function(props) {

    if(props.answer === null) {
      return <p></p>
    };
    return <p>{props.answer}</p>

}
 module.exports = QuestionAnswer;