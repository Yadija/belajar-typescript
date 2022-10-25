const person: { name: string, age: number } = {
  name: "John",
  age: 20
};

// typed inferance
const item = {
  name: "Sword"
};
item.name = "Bow";
// item.name = 2; // error

// optional properties
/* 
error
const car: { type: string, mileage: number } = {
  type: "Toyota"
};
car.mileage = 2000;

*/
const car: { type: string, mileage?: number } = {
  type: "Toyota"
};
car.mileage = 2000;

// index signatures
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
// nameAgeMap.Mark = "Fifty"; // error