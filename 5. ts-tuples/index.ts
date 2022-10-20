let myTuple: [number, boolean, string];
myTuple = [12, false, "string"];
// myTuple = [12, "string"]; // error

// readonly tuple
const myReadonlyTuple: readonly [number, boolean, string] = [5, true, "string"];
// myReadonlyTuple.push(2); // error

// named tuple
const square: [x: number, y: number] = [10, 7];

// destructuring tuple
const graph: [number, number] = [55, 30];
let [x, y] = graph;
// x = true // error