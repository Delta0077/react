const add = (a, b) => a + b;

console.log(add(10, 5));

const user = {
  name: "Mr Deep",
  cities: ["Mumbai", "Delhi", "Chennai"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city + "!");
  },
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  },
};
console.log(multiplier.multiply());
