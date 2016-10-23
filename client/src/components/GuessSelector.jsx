var React = require('react');

var GuessSelector = React.createClass({

  generateGuessDropdown: function() {
    var options = this.props.hughs.map(function(hugh, index){
      return <option key={index} value={hugh.id}>{hugh.name}</option>
    });
    return options;  
  },

  handleGuess: function(event, index) {
    var id = event.target.value;
    this.props.makeGuess(id);
  },

  render: function(){
    var options = this.generateGuessDropdown();
    return (
      <select id="guess-dropdown" onChange={this.handleGuess}>
        <option selected="true" disabled="disabled">Choose a Hugh</option>
        {options}
      </select>
    )
  }

})

module.exports = GuessSelector;