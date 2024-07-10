# handson-electron
Hands on Electron js for the first time

# about preload.js
- preload.js biasanya untuk mengekspos API istimewa (e.g: node) ke dalam proses atau bagian renderer
- preload.js menjadi jembatan antara main dengan renderer, akan dieksekusi sebelum web page/view di render/load.
- kita dapat menambahkan fitur ke renderer dengan menggunakan object melalui contextBridge