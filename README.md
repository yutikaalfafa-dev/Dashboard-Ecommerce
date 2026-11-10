# Dashboard E-Commerce

Dashboard E-Commerce merupakan aplikasi web berbasis Dashboard Admin yang digunakan untuk mengelola produk toko online. Aplikasi ini dikembangkan menggunakan React JS 19 dan Vite dengan menerapkan fitur CRUD (Create, Read, Update, Delete) untuk memudahkan pengelolaan data produk, mulai dari menambahkan, menampilkan, mengubah, hingga menghapus produk.

## Teknologi yang Digunakan

- HTML5 dan HTML Semantik
- CSS3
- Bootstrap 5
- JavaScript
- DOM Manipulation
- jQuery
- React JS 19
- Vite

## Fitur Utama

- Dashboard statistik untuk menampilkan ringkasan data produk.
- Menampilkan daftar produk beserta gambar, nama, kategori, harga, stok, dan diskon.
- Menambahkan produk baru.
- Mengubah informasi produk.
- Menghapus produk dari daftar katalog.
- Pencarian dan filter produk.
- Menampilkan status ketersediaan stok produk.
- Tampilan responsif untuk desktop, tablet, dan mobile.

## Struktur Folder
dashboard-ecommerce/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Navbar.jsx
│   │   ├── DashboardStats.jsx
│   │   ├── ProductTable.jsx
│   │   ├── ProductFormModal.jsx
│   │   └── DeleteConfirmation.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── index.html
├── package.json
└── README.md


## Cara Menjalankan Aplikasi

Setelah seluruh dependensi berhasil diinstal, jalankan aplikasi Dashboard E-Commerce dengan langkah berikut:

1. Buka terminal pada Visual Studio Code di dalam folder proyek `dashboard-ecommerce`.
2. Ketik perintah berikut untuk menjalankan aplikasi:

   ```bash
   npm run dev
   ```

3. Tunggu hingga proses menjalankan server Vite selesai. Jika berhasil, terminal akan menampilkan alamat lokal aplikasi.
4. Buka browser Google Chrome, kemudian akses alamat yang ditampilkan pada terminal, biasanya:

   ```text
   http://localhost:5173/
   ```

5. Setelah alamat berhasil dibuka, halaman Dashboard E-Commerce akan ditampilkan dan siap digunakan.

6. Untuk menghentikan aplikasi, kembali ke terminal dan tekan `Ctrl + C`.
