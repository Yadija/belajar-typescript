# Typescript

## Apa itu Typescript

- Typescript adalah sintactic superset Javascript yang menambahkan static typing
- Yang berarti Typescript menambahkan sintak pada Javascript, memungkinkan pengembang menambahkan Types (tipe-tipe)


## Kenapa Typescript

- Javascript adalah loosely typed language (bahasa yang diketik longgar)
- Yang membuatnya sulit untuk memahami jenis data apa yang dideklarasikan dalam Javascript

<br>

- Dalam Javascript, variabel dan function parameter tidak memiliki identitas / informasi
- Jadi pengembang perlu melihat dokumentasi, atau menebak berdasarkan implementasi

<br>

- Typescript memungkinkan dalam menentukan jenis data yang dideklarasikan di dalam kode
- Dan memiliki kemampuan untuk melaporkan kesalahan (error) ketika jenis tidak cocok

<br>

- Misal, Typescript akan menampilkan error saat meneruskan string ke function yang mengharapkan number, tetapi Javascript tidak

<br>

<div style="background-color: #F8C4B4; padding: 15px; color: #222; border-radius: 3px">
  <p>
    Typescript melakukan pemeriksaan tipe pada waktu kompilasi (compile)
  </p>
  <p>
    Yang artinya memeriksa apakah tipe yang ditentukan cocok <strong>sebelum</strong> menjalankan kode, bukan <strong>saat</strong> menjalankan kode
  </p>
</div>


## Cara menggunakan Typescript

- Cara umum untuk menggunakan Typescript adalah dengan menggunakan compiler Typescript resmi, yang akan mengubah kode Typescript menjadi kode Javascript
