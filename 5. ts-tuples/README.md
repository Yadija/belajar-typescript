# Typescript Tuple

## Typed Arrays

- Tuple adalah array yang diketik dengan panjang dan tipe yang telah ditentukan untuk setiap indeks
- Tuple sangat bagus karena memungkinkan setiap elemen dalam array menjadi tipe yang diketahui

<br>

- Untuk mendefinisikan sebuah tuple, tentukan tipe setiap elemen dalam array:

```ts
// define tuple
let ourTuple: [number, boolean, string];

// initialize yang benar
ourTuple = [5, false, 'Coding God was here'];
```

<br>

- Seperti yang dilihat, array tersebut memiliki number, boolean, dan string. Tetapi apa yang terjadi jika mencoba mengaturnya dalam urutan yang salah

```ts
// define tuple
let ourTuple: [number, boolean, string];

// initialized yang salah dan akan menghasilkan error
ourTuple = [false, 'Coding God was mistaken', 5];
```

<br>

<div style="background-color: #FFF9B0; padding: 15px; color: #222; border-radius: 3px">
  <p>
    Meskipun memiliki <code>boolean</code>, <code>string</code>, dan <code>number</code> urutan penting dalam tupel dan akan menimbulkan kesalahan
  </p>
</div>

<br>

## Readonly Tuples

- Sebuah praktis yang bagus adalah membuat tuple tersebut readonly
- Tuple hanya memiliki tipe yang sangat ditentukan untuk nilai awal:

```ts
// define readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');
```

<br>

<div style="background-color: #FFF9B0; padding: 15px; color: #222; border-radius: 3px">
  <p>
    Jika pernah menggunakan React sebelumnya, kemungkinan besar pernah menulis menggunakan tupel
  </p>
  <p>
    <code>useState</code> mengembalikan Tuple nilai dan setter function
  </p>
  <p>
    <code>const [firstName, setFirstName] = useState("John")</code> adalah contoh umum
  </p>
  <p>
    Karena strukturnya, diketahui nilai pertama adalah <code>string</code> dan nilai kedua adalah <code>function</code>
  </p>
</div>

<br>

## Named Tuples

- Namde tuple memungkinkan untuk memberikan konteks untuk nilai-nilai kami disetiap indeks

```ts
const graph: [x: number, y: number] = [55.2, 41.3];
```

<div style="background-color: #FFF9B0; padding: 15px; color: #222; border-radius: 3px">
  <p>
    <strong>Named Tuple</strong> memberikan lebih banyak konteks untuk apa yang diwakili oleh nilai indeks
  </p>
</div>

<br>

## Destructuring Tuples

- Karena tuple adalah array, maka dapat di destructuring

```ts
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
```