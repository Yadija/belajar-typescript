// eksplisit
let firstName: string = "John"; // menulis jenis tipe string


// implisit
let age = 20; // menebak jenis tipe data number, menebak (guess) juga disebut infer (menyimpulkan)


// error dalam menetapkan tipe
// eksplisit
let lastName: string = "Doe";
// lastName = 33; // error

// implisit
let two = 2;
// two = "two"; // error


// Tidak dapat menyimpulkan (infer)
let person; // tipe data any
person = "Jane";
person = true;