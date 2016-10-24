 var React = require('react');

 var QuestionAnswer = function(props) {

   if (props.answer === null) {
     return <p></p>
   };

   var setResponse = props.answer ? "Yes" : "No";
   
   return (
     <h2>{setResponse}</h2>
     )
 }

 module.exports = QuestionAnswer;