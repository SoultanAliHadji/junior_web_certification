Website BeasiswaPintar

Website ini dibangun menggunakan bahasa pemograman javascript dengan library berupa React JS untuk sisi frontend, Express JS untuk sisi backend, dan mySQL sebagai database

Alur melakukan pendaftaran beasiswa melalui website BeasiswaPintar:

1. User mengakses url websitenya (disini menggunakan "localhost:3000/"), setelah melakukan login user akan diarahkan ke halaman landing page
2. Untuk melakukan pendaftaran beasiswa, user dapat mengakses halaman pendaftaran melalui button yang ada pada landing page, atau mengaksesnya melalui navbar
3. User menginputkan seluruh data yang diperlukan untuk mendaftar, jika ada kesalahan pendataan maka akan muncul notifikasi tertentu
4. IPK akan muncul secara otomatis menurut login, apabila username yang diinputkan pada saat login adalah "Soultan Ali Hadji" maka IPK yang terisi adalah 3.82, sedangkan nama lain akan menjadi 2.9
5. User melakukan submit data
6. User dapat mengakses halaman hasil untuk melihat hasil pendaftaran yang telah dilakukan
7. Berapapun data yang disubmit, yang tampil pada halaman hasil tetaplah data terakhir, hal ini dimisalkan 1 user hanya boleh mendaftar 1 kali saja sehingga data yang disubmit merupakan data user dan hanya data itulah yang dapat dilihat oleh user

---

Syarat menjalankan program:

1. Pastikan sudah menginstall Node JS
2. Pastikan mySql sudah berjalan dan siap untuk digunakan

Tata cara run server:

1. Import database yang sudah disediakan dengan nama file "beasiswa_pintar.sql" pada PHPMyAdmin
2. Masuk ke folder server dengan mengetikkan "cd server" pada terminal
3. Install dependency yang sudah terdapat pada file package.json dengan mengetikkan "npm install" pada terminal
4. Install nodemon dengan mengetikkan "npm install --save-dev nodemon"
5. Run server dengan mengetikkan "nodemon index.js" pada terminal

Tata cara run client:

1. Masuk ke folder client dengan mengetikkan "cd client" pada terminal
2. Install dependency yang sudah terdapat pada file package.json dengan mengetikkan "npm install" pada terminal
3. Run client dengan mengetikkan "npm start" pada terminal

Struktur/hirarki folder server:

1. File index.js, file utama untuk melakukan inisialisasi hal-hal dasar yang dibutuhkan seperti library express dan menentukan port localhost
2. Folder node_modules, tempat dimana terinstallnya semua library yang diinstall
3. Folder config, tempat melakukan konfigurasi database sehingga dapat terhubung dengan server
4. Folder controllers, tempat melakukan kontrol http request seperti konfigurasi untuk melakukan request get, post, put, dan delete
5. Folder models, tempat untuk melakukan konfigurasi bentuk model dari tabel database yang digunakan
6. Folder routes, tempat untuk melakukan konfigurasi routing setiap http request yang akan digunakan

Struktur/hirarki folder client:

1. File App.js, file dimana dilakukan konfigurasi routing menggunakan library react-router-dom
2. Folder node_modules, tempat dimana terinstallnya semua library yang diinstall
3. Folder assets, tempat menaruh file yang akan digunakan sebagai asset untuk membangun program seperti file gambar
4. Folder components, tempat menaruh komponen-komponen yang dapat digunakan berulang kali (reusable component)
5. Folder pages, tempat manaruh komponen halaman seperti landing, register, dan application
