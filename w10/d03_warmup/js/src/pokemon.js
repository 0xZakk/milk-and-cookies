var pokemon = {

  pokemonList : allPokemon,

  printAllPokemonNamesToConsole : function(){
    _.each(allPokemon, function(poke) {
      console.log(poke.name);
    });
  },

  findPokemonByName : function(name){
    return _.findWhere(allPokemon, {name: name});
  },

  findStrongestPokemon : function(){
    return _.max(allPokemon, function(poke){
      return parseInt(poke.stats.attack);
    });
  },

  findPokemonByType : function(type){
    return _.filter(allPokemon, function(poke){
      return _.contains(poke.type, type);
    });
  },

  findAllTypes : function(){
    var arrayOfPokeTypes = [];
    _.each(allPokemon, function(poke) {
      _.each(poke.type, function(type){
        if (_.find(arrayOfPokeTypes, type)) {
          arrayOfPokeTypes.push(type);
        }
      });
    });
    return arrayOfPokeTypes;
  },

  totalStats : function(name){
  }
};