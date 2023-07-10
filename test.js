const Animal = require('./Animal.js');

describe('Animal unit tests', () => {
  let animal;

  beforeEach(() => {
    animal = new Animal('Stanley', 'dog', 4);
  });

  it('Should be a dog', () => {
    expect(animal).toBeDefined();
    expect(animal.hasName()).toBe(true);
  });

  it('Should be a cat', () => {
    animal.species = 'cat';
    expect(animal).toBeDefined();
    expect(animal.isDog()).toBe(false);
  });

  it('Should only be a dog or a cat', () => {
    animal.species = 'human';
    expect(animal.species).not.toBe('dog');
    expect(animal.species).not.toBe('cat');
  });
});
