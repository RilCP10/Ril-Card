# Aril's World

Website personal bertema biru muda, dibuat dengan React + Vite.

## 1. VS Code
Buka folder project ini di VS Code. Kode ada di:
- `src/App.jsx` - isi halaman (edit nama, daftar anime, hobi, musik di bagian `EDIT DATA KAMU DI SINI`)
- `src/App.css` - tampilan dan warna
- `public/aril.jpg` - **taruh foto/gambar hero kamu di sini** (nama file harus `aril.jpg`)

## 2. React + Vite (jalankan lokal)
```bash
npm install
npm run dev
```
Buka alamat yang muncul (biasanya http://localhost:5173/aril-world/).

## 3. Browser
Cek tampilan di browser. Untuk tampilan HP: tekan F12, lalu ikon device toolbar.
Cek hasil build: `npm run build` lalu `npm run preview`.

## 4. GitHub Pages
1. Buat repository baru di GitHub bernama `aril-world` (harus sama dengan `base` di `vite.config.js`).
2. Ganti `USERNAME` di `package.json` pada field `homepage` dengan username GitHub kamu.
3. Jalankan:
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/aril-world.git
git push -u origin main
npm run deploy
```
4. Di GitHub: Settings -> Pages -> Source: branch `gh-pages` / root.
5. Website aktif di `https://USERNAME.github.io/aril-world/`.

Kalau nama repository berbeda, ubah `base: '/nama-repo/'` di `vite.config.js`.
