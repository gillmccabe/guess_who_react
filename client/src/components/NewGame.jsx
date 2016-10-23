var React = require('react');
var HughList = require('./HughList');
var QuestionSelector = require('./QuestionSelector');
var QuestionAnswer = require('./QuestionAnswer');

var NewGame = React.createClass({

  getInitialState: function(){

    var questions = [
      "Is he wearing glasses?",
      "Does he have dark hair?",
      "Is he wearing a hat?",
      "Does he have facial hair?"
    ]

    return { 
      correctHugh: null,
      hughs: [], 
      questions: questions, 
      selectedQuestion: null,
      questionAnswer: null,
    }
  },

  componentDidUpdate: function() {
    if (this.state.correctHugh === null) {
    const randomHugh = this.state.hughs[Math.floor(Math.random() * this.state.hughs.length)];
    this.setState({correctHugh: randomHugh})
    }
  },

  setSelectedQuestion: function(index) {
      this.setState({ selectedClue: index }, function respondToQuestion() {        
        var index = this.state.selectedQuestion;
        var response = this.state.correctHugh.clue[index];
        this.setState({questionAnswer: response});    
      }.bind(this)); 
  },

  render: function(){
    return(
    <div>  
      <HughList hughs={this.props.hughs}></HughList>
      <div className="questions">
        <h2>Ask A Question</h2>
        <QuestionSelector hughs={this.state.hughs} questions={this.state.questions} selectedQuestion={this.setSelectedQuestion}/>
        <QuestionAnswer answer={this.state.questionAnswer}/>
      </div>
    </div>
    )
  }

})

module.exports = NewGame;