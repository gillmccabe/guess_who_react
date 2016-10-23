var React = require('react');

var QuestionSelector = React.createClass({

  generateQuestions: function() {
    var options = this.props.questions.map(function(question, index){
      return <option key={index} value={index}>{question}</option>
    });
    return options;  
  },

  handleQuestionChoice: function(event) {
    var newIndex = event.target.value;
    this.props.selectedQuestion(newIndex);
  },

  render: function(){

    if(!this.props.questions){
      return;
    }
    var options = this.generateQuestions();
    return (
      <select id="questions-dropdown" onChange={this.handleQuestionChoice}>
        <option selected="true" disabled="disabled">Select Question</option>
        {options}
      </select>
    )

  }


})

module.exports = QuestionSelector;