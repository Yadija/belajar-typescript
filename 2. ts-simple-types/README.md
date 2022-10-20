# Tipe Sederhana Typescript

- TypeScript mendukung beberapa tipe sederhana (primitif)

<div style="background-color: #BCE29E; padding: 15px; color: #222; border-radius: 3px">
  <p>Ada tiga primitif utama dalam JavaScript dan TypeScript.</p>
  <ul>
    <li><p><strong>boolean</strong> - nilai benar atau salah</p></li>
    <li><p><strong>number</strong> - bilangan bulat dan nilai floating point</p></li>
    <li><p><strong>string</strong> - nilai teks seperti "TypeScript Rocks"</p></li>
  </ul>
</div>

<br>

## Menetapkan Tipe

- Saat membuat variabel, ada dua cara utama TypeScript menetapkan tipe:
  - Eksplisit
  - Implisit


### Tipe Eksplisit
- Eksplisit - menuliskan jenisnya
- Menetapkan tipe eksplisit lebih mudah dibaca dan lebih disengaja


### Tipe Implisit
- Implicit - TypeScript akan "menebak" jenisnya, berdasarkan nilai yang ditetapkan

<div style="background-color: #FFF9B0; padding: 15px; color: #222; border-radius: 3px">
  <p>
    <strong>Catatan:</strong> Memiliki TypeScript "menebak" jenis nilai disebut <strong>infer</strong>
  </p>
</div>

<br>

- Penetapan implisit memaksa TypeScript untuk menyimpulkan nilai.
- Penetapan tipe implisit lebih pendek, lebih cepat untuk diketik, dan sering digunakan saat mengembangkan (development) dan menguji (testing)

<br>

## Error dalam menetapkan Tipe

- TypeScript akan memunculkan error jika tipe data tidak cocok
```ts
let firstName: string = "John"; // type string
firstName = 33; // attempts to re-assign the value to a different type
```

<br>

- Penetapan tipe implisit akan membuat firstNamekurang terlihat sebagai string, tetapi keduanya akan menimbulkan kesalahan
```ts
let firstName = "Jane"; // inferred to type string
firstName = 33; // attempts to re-assign the value to a different type
```

-JavaScript tidak akan menimbulkan error untuk tipe data yang tidak cocok

<br>

## Tidak dapat menyimpulkan (Infer)

- TypeScript mungkin tidak selalu menyimpulkan dengan tepat apa tipe variabelnya. Dalam kasus seperti itu, itu akan mengatur jenis `any` yang menonaktifkan pemeriksaan jenis
- Perilaku ini dapat dinonaktifkan dengan mengaktifkan `noImplicitAny` sebagai opsi dalam proyek TypeScript `tsconfig.json`. Itu adalah file konfigurasi JSON untuk menyesuaikan bagaimana beberapa TypeScript berperilaku