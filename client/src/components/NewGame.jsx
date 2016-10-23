var React = require('react');
var HughList = require('./HughList');

var NewGame = React.createClass({

  getInitialState: function(){

    var questions = [
      "Is he wearing glasses?",
      "Does he have dark hair?",
      "Is he wearing a hat?",
      "Does he have facial hair?"
    ]

    return { 
      correctAnswer: null,
      hughs: [], 
      questions: questions, 
      questionAnswer: null, 
      selectedQuestion: null,
      guessId: null,
      guessResponse: null
    }
  },

  componentDidUpdate: function() {
    if (this.state.correctAnswer === null) {
    const randomHugh = this.state.hughs[Math.floor(Math.random() * this.state.hughs.length)];
    this.setState({correctAnswer: randomHugh})
    }
  },

  render: function(){
    return(
      <HughList hughs={this.props.hughs}></HughList>
    )
  }

})

module.exports = NewGame;