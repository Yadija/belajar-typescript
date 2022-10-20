# Typescript Compiler

- Typescript diubah ke dalam Javascript menggunakan Compiler

## Menginstall Compiler

- Typescript memiliki compiler resmi yang dapat diinstall melalui npm

- Di dalam projek npm, jalankan perintah berikut untuk menginstall compiler:
```
npm install typescript --save-dev
```

<br>

- Compiler dipasang di direktori `node_modules` dan dapat dijalankan dengan: `npx tsc`


## Mengonfigurasi Compiler

- Secara default compiler Typescript akan mencetak pesan bantuan (help message) saat dijalankan dalam projek kosong

- Compiler dapat membuat `tsconfig.json` pada Typescript dengan menjalankan:
```
npx tsc --init
```

<br>

- Yang seharusnya memberi output yang mirip dengan:
```
Created a new tsconfig.json with:
TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true

You can learn more at https://aka.ms/tsconfig.json
```

<br>

- Berikut adalah contoh yang dapat ditambahkan ke file `tsconfig.json`:
```json
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "./build"
  }
}
```

<br>

- Bisa dengan membuka file di text editor untuk menambahkan opsi tersebut
- Ini akan mengonfigurasi Typescript compiler untuk mengubah / mentranspile file Typescript yang terletak di projek direktori `src/`, kedalam file Javascript di dalam direktori `build/`

<br>

<div style="background-color: #BCE29E; padding: 15px; color: #222; border-radius: 3px">
  <p>
    Ini adalah salah satu cara untuk memulai Typescript dengan cepat
  </p>
  <p>
    Ada banyak opsi lain yang tersedia seperti <a href="https://create-react-app.dev/docs/adding-typescript/">create-react-app template</a>, <a href="https://github.com/microsoft/TypeScript-Node-Starter">node starter project</a>, <a href="https://webpack.js.org/guides/typescript/">webpack plugin</a>
  </p>
</div>