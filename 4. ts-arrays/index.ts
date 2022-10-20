const characters: string[] = [];
characters.push("Mario");
// characters.push(20); // error

// readonly
const names: readonly string[] = ["John"];
// names.push("Doe"); // error

// tipe inference
const numbers = [1, 2, 3]; // menyimpulkan tipe number
numbers.push(4);
// numbers.push("2"); // error