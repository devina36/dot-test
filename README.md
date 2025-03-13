# React Simple App with Authentication & API Fetching

## Overview

Aplikasi ini adalah aplikasi React sederhana yang menggunakan autentikasi login dari API eksternal, fetch data dari API dummy, serta menerapkan beberapa konsep React seperti:

- Conditional Rendering
- Reusable Component
- Reactivity (State & Effect)
- Routing dengan proteksi autentikasi
- TailwindCSS untuk styling

## Features

1. **Login Authentication**

   - Menggunakan API eksternal `dummyjson.com/auth/login`
   - Menyimpan token autentikasi di `localStorage`
   - Redirect ke halaman utama setelah login

2. **Protected Route**

   - Pengguna yang belum login akan diarahkan ke halaman login

3. **Fetching Data**

   - Mengambil data dari `jsonplaceholder.typicode.com/posts`
   - Menampilkan daftar postingan dalam bentuk kartu (Card Component)

4. **Search Feature**

   - Mencari data berdasarkan judul postingan secara real-time

5. **Logout Functionality**
   - Menghapus data autentikasi dari `localStorage`
   - Redirect kembali ke halaman login

## Installation & Setup

### Prerequisites

Pastikan sudah menginstal Node.js dan npm/yarn di sistem Anda.

### Install Dependencies

```sh
npm install
# atau
yarn install
```

### Run the Application

```sh
npm run dev
# atau
yarn run dev
```

## Usage

1. **Login**
   - Masukkan username: `emilys` dan password: `emilyspass`
2. **Main Page**
   - Daftar postingan akan ditampilkan dalam bentuk kartu
   - Gunakan fitur pencarian untuk mencari postingan berdasarkan judul
3. **Logout**
   - Klik tombol "Logout" untuk keluar dari aplikasi

## Technologies Used

- **React.js** (Functional Components & Hooks)
- **TypeScript**
- **React Router** (Routing & Protected Routes)
- **Axios** (Fetching API data)
- **TailwindCSS** (Styling)
- **ESLint** (Code Linting)

## API References

- **Login API:** `https://dummyjson.com/auth/login`
- **Posts API:** `https://jsonplaceholder.typicode.com/posts`
