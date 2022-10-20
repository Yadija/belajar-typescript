# Tipe Khusus Typescript

- TypeScript memiliki tipe khusus yang mungkin tidak merujuk ke tipe data tertentu

<br>

## Tipe: any 

- `any` adalah tipe yang menonaktifkan pemeriksaan tipe dan secara efektif memungkinkan semua tipe dapat digunakan

### Contoh tanpa `any`

```ts
let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
```

### Contoh dengan `any`

- Mengatur `any` ke tipe khusus `any` dapat menonaktifkan pemeriksaan tipe

```ts
let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
```

<br>

<div style="background-color: #F8C4B4; padding: 15px; color: #222; border-radius: 3px">
  <p>
    <code>any</code> bisa menjadi cara yang berguna untuk mengatasi kesalahan (error) karena menonaktifkan pemeriksaan tipe, tetapi TypeScript tidak akan dapat memberikan keamanan tipe, dan alat yang mengandalkan tipe data, seperti pelengkapan otomatis, itu tidak akan berfungsi. Ingat, hindari penggunaan <code>any</code>
  </p>
</div>

<br>

## Tipe: unknown

- `unknown` adalah alternatif yang serupa, tetapi lebih aman untuk `any`
- Typescript akan mencegah tipe `unknown` digunakan, seperti yang ditunjukkan pada contoh di bawah:

```ts
let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
```

<br>

<div style="background-color: #BCE29E; padding: 15px; color: #222; border-radius: 3px">
  <p>
    <code>unknown</code> paling baik digunakan ketika tidak tahu tipe data apa yang sedang diketik. Untuk menambahkan jenis nanti, harus meng-castingnya
  </p>
  <p>
    Casting adalah ketika menggunakan kata kunci <code>as</code> untuk mengatakan properti atau variabel bertipe cast
  </p>
</div>

<br>

## Tipe: never

- `never` secara efektif melempar kesalahan (error) setiap kali didefinisikan

```ts
let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
```

<br>

<div style="background-color: #FFF9B0; padding: 15px; color: #222; border-radius: 3px">
  <p>
    <code>never</code> jarang digunakan, terutama dengan sendirinya, penggunaan utamanya adalah pada advanced generics
  </p>
</div>

<br>

## Tipe: unfefined & null

- `undefined` dan `null` merupakan tipe yang mengacu pada tipe data primitif JavaScript `undefined` dan `null` masing-masing

```ts
let y: undefined = undefined;
let z: null = null;
```

<br>

<div style="background-color: #F8C4B4; padding: 15px; color: #222; border-radius: 3px">
  <p>
    Jenis ini tidak banyak digunakan kecuali <code>strictNullChecks</code> diaktifkan dalam file <code>tsconfig.json</code>
  </p>
</div>