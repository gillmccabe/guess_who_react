var React = require('react');
var HughList = require('./HughList');
var QuestionSelector = require('./QuestionSelector');
var QuestionAnswer = require('./QuestionAnswer');
var GuessSelector = require('./GuessSelector');
var GuessAnswer = require('./GuessAnswer');

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
      questions: questions, 
      selectedQuestion: null,
      questionAnswer: null,
      guessAnswer: null,
      guessId: null
    }
  },

  componentDidUpdate: function() {
    if (this.state.correctHugh === null) {
    const randomHugh = this.props.hughs[Math.floor(Math.random() * this.props.hughs.length)];
    this.setState({correctHugh: randomHugh})
    }
  },

  setSelectedQuestion: function(index) {
      this.setState({ selectedClue: index }, function respondToQuestion() {        
        var index = this.state.selectedQuestion;
        var response = this.state.questions[index];
        this.setState({questionAnswer: response});    
      }.bind(this)); 
  },

  checkGuessIsCorrect: function(guessId) {
    this.setState({guessId: guessId}, function respondToGuess(){
      if (guessId === this.state.correctHugh.id) {
        this.setState({guessAnswer: "That's the correct answer. Well Done!"})
      } else {
        this.setState({guessAnswer: "Oops wrong answer! Try Again..."})
      }
    }.bind(this));
  },

  render: function(){
    return(
      <div>  
        <div className='images'>
          <HughList hughs={this.props.hughs}></HughList>
        </div>
        <div className='all-dropdown-info'>
          <div className="questions-div">
            <h2 id='question-title'>Ask A Question</h2>
            <QuestionSelector hughs={this.props.hughs} questions={this.state.questions} defaultValue={this.setSelectedQuestion}/>
            <QuestionAnswer answer={this.state.questionAnswer}/>
          </div>
          <div className="guess-div">
            <h2 id='guess-title'>Take A Guess</h2>
            <GuessSelector hughs={this.props.hughs} makeGuess={this.checkGuessIsCorrect} />
            <GuessAnswer response={this.state.guessAnswer}/>
          </div>
        </div>
      </div>
    )
  }

})

module.exports = NewGame;