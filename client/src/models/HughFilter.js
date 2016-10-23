_ = require('lodash');

var HughFilter = function(hughs){
  this.hughs = hughs;
}

HughFilter.prototype = {
  filterByHairColour: function(colour){
    if(!colour) return this.hughs;
    var filteredHughs = [];
    _.forEach(this.hughs, function(hugh){
      if(hugh.hairColour === colour)
        filteredHughs.push(hugh);
    })
    return filteredHughs;
  },
  filterByGlasses: function(house){
    if(!glasses) return this.hughs;
    var filteredHughs = [];
    _.forEach(this.hughs, function(hugh){
      if(character.glasses === true)
        filteredHughs.push(hugh)
    })
    return filteredHughs;
  },
  filterByFacialHair: function(facialHair){
    if(!facialHair) return this.hughs;
    var filteredHughs = [];
    _.forEach(this.hughs, function(hugh){
      if(character.facialHair === true)
        filteredHughs.push(hugh)
    })
    return filteredHughs;
  },
  filterByHat: function(hat){
    if(!hat) return this.hughs;
    var filteredHughs = [];
    _.forEach(this.hughs, function(hugh){
      if(character.hat === true)
        filteredHughs.push(hugh)
    })
    return filteredHughs;
  }
}

module.exports = HughFilter;