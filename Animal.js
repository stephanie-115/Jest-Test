function Animal(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }
  
Animal.prototype.hasName = function() {
    return !!this.name;
  };
  
Animal.prototype.isDog = function() {
    return this.species === 'dog';
  };
  
module.exports = Animal;
  
