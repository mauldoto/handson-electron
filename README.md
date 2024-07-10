# handson-electron
Hands on Electron js for the first time

# about preload.js
- preload.js biasanya untuk mengekspos API istimewa (e.g: node) ke dalam proses atau bagian renderer
- preload.js menjadi jembatan antara main dengan renderer, akan dieksekusi sebelum web page/view di render/load.
- kita dapat menambahkan fitur ke renderer dengan menggunakan object melalui contextBridge
- pada preload.js juga dapat kita gunakan module IPC untuk komunikasi antara process renderer dan main
- pada proses renderer kita dapat menggunakan ipc.renderer kemudian invoke event yang akan di handle oleh ipc.main
- sedangkan di proses main kita menggunakan ipc.main untuk menerima event dari renderer