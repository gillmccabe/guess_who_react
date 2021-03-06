var React = require('react');
var HughList = require('./HughList');
var QuestionSelect = require('./QuestionSelect');
var QuestionAnswer = require('./QuestionAnswer');
var GuessSelect = require('./GuessSelect');
var GuessAnswer = require('./GuessAnswer');

var NewGame = React.createClass({

  getInitialState: function(){

    return { 
      questions: [
      "Does he have facial hair?",
      "Is he wearing glasses?",
      "Does he have dark hair?",
      "Is he wearing a hat?"
      ], 
      correctHugh: null,
      selectedQuestion: null,
      questionAnswer: null,
      guessId: null,
      guessAnswer: null
    }
  },

  componentDidUpdate: function() {
    if (this.state.correctHugh === null) {
     var randomHugh = this.props.hughs[Math.floor(Math.random() * this.props.hughs.length)];
    this.setState({correctHugh: randomHugh})
    }
  },

  setSelectedQuestion: function(index) {
      this.setState({ selectedQuestion: index }, function respondToQuestion() {        
        var index = this.state.selectedQuestion;
        var response = this.state.correctHugh.question[index];
        this.setState({questionAnswer: response});    
      }.bind(this)); 
  },

  checkGuessIsCorrect: function(guessId) {
    this.setState({guessId: guessId}, function respondToGuess(){
      if (guessId == this.state.correctHugh.id) {
        this.setState({guessAnswer: "That's the correct answer. Well Done!"})
      } else {
        this.setState({guessAnswer: "Oops - wrong answer! Try Again!"})
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
            <QuestionSelect hughs={this.props.hughs} questions={this.state.questions} selectedQuestion={this.setSelectedQuestion}/>
            <QuestionAnswer answer={this.state.questionAnswer}/>
          </div>
          <div className="guess-div">
            <h2 id='guess-title'>Take A Guess</h2>
            <GuessSelect hughs={this.props.hughs} makeGuess={this.checkGuessIsCorrect} />
            <GuessAnswer response={this.state.guessAnswer}/>
          </div>
        </div>
      </div>
    )
  }

})

module.exports = NewGame;