_ = require('lodash');

var HughSelection = function(){

}

HughSelection.prototype = {
  userChoice: function(hughs, choosenHugh){
    for(hugh of hughs){
      if(hugh.name === choosenHugh.name)
        return hugh;
    }
  },
  gamesChoice: function(hughs){
    var randomHugh = hughs[Math.floor(Math.random() * hughs.length)]
    return randomHugh;
  }
}

module.exports = HughSelection;