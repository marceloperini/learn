const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + 'has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
};

console.log(multiplier.multiply());
