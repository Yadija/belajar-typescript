# Typescript Object Types

- TypeScript memiliki sintaks khusus untuk mengetik objek

```ts
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};
```

## Type Inference

- TypeScript dapat menyimpulkan jenis properti berdasarkan nilainya

```ts
const car = {
  type: "Toyota",
};
car.type = "Ford"; // no error
car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
```

<br>

## Optional Properties

- Optional Properties adalah properti yang tidak harus didefinisikan dalam definisi objek

<br>

- Tanpa Optional Property
```ts
const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car.mileage = 2000;
```

<br>

- Dengan Optional Property
```ts
const car: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car.mileage = 2000;
```

<br>

## Index Signatures

- Index Signatures  dapat digunakan untuk objek tanpa daftar properti yang ditentukan

```ts
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
```