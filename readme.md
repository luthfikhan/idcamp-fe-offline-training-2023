### Offline Training Front-End Web Developer IDCamp X Kadin 13-14 Mei 2023

Trainer: 
- Nur Rizki Adi ( Adi ) - Curriculum Developer Dicoding
- Rizqy Hidayat ( Rizqy ) - Tech Lead Dicoding
- Dimas Maulana Dwi Saputra ( Dimas ) - Curriculum Developer Dicoding

links
- [How to](http://dicoding.id/frontend-KADIN)

##### Responsive Design
###### 1. Micro Layout
Berfokus pada item dalam component
###### 2. Macro Layout
Lebih Berfokus pada layout

#### Pengenalan PWA & Teori Application Shell
by Nur Rizqi Adi
Kelebihan
- Dapat diintall seperti "Native App"
- Home screen Icon sendiri
- Terintregrasi Dengan Semua OS
- Bisa diakses offline

#### Komponen pembentuk PWA
##### 1. Komponent Inti
- Application Shell
- Web App Manifest
- Service Worker
##### 2. Pendukung
- Cache API
- Fetch API
- IndexedDB: Database yg ada di client ( browser )
- Dsb.

##### Application Shell
- App Shell memisahkan antara base UI dengan content
- Base UI akan di-cache biar bisa diakses offline

##### Install Capability
by Dimas Maulana
###### Installaction Criteria
- Secure web ( https )
- Web App Manifest
- Icon ( Di dalem manifest )
- Service worker ( mobile device only )

1. Web App Manifest
- Berkas yg menampung berkas yg menampung informasi aplikasi
  - nama
  - deskripsi
  - icon
  - warna tema
  - dsb
- head:
`<link rel="manifest" href="manifest.json">`
- Buat icons yg [maskable](https://maskable.app)
- icons di safari
`<link rel="apple-touch-icon" sizes="180x180" href="icon.png" >`
- [manifest generator](https://manifest-gen.netlify.app/)

##### Offline Capability
by Nur Rizki Adi
###### Service Worker
- Salah satu bagian dari Web Worker yg membuat background service sebagai midleware antara browser dan server
- push notifications
- service worker tidak bisa akses DOM, karena terpisah dari main thread

###### Service Worker Registration
```
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/serviceworker.js");
}
```

###### Workbox
- workbox adalah tool yg menyederhanakan routing dan caching di service worker

##### [Native Capabilities](https://whatwebcando.today/)
by Dimas Maulana

Jenis Storage browser
- Session Storage
- Cookies
- Local Storage
- Cache Storage
- IndexedDB

Storage sesuai kasus
- Data yg diakses server dan client: Cookies
- Menyimpan pengaturan aplikasi: local storage
- Menyimpan data komplek dan ukuran besar: IndexedDB
- Menyimpan data dari HTTP request biar bisa diakses saat offline: cache

IndexedDB
- Bekerja secara async
- Tidak ada limit ukuran data yg disimpan, menyesuaikan disk
- Dapat diakses dari service worker

Menggunakan IndexedDB
- Cek dukungan browser
```
if (!window.indexedDB) {
  console.log('browser tidak support')
}
```
- Menggunakan [idb](https://www.npmjs.com/package/idb) library

Push Notification
- pesan yg dikirimkan kepada pengguna menggunakan notifikasi
- pengguna tidak perlu membuka web untuk mendapatkan notifikasi
- agar dapat menerima push message, identitas pengguna perlu didaftarkan ke web push service provider sebagai target

##### Extended Feature on Web Apps
by Rizqy Hidayat
- Geolocation API
Mendapatkan latlng dari user
- MediaDevices API
Akses camera, microphone dll
- Canvas API
- WebSocket
Dua arah, lebih ke texts
- Server-Side Events
Satu arah dari server ke client
- WebRTC
Client ke client, lebih cocok untuk realtime vidio, suara`
- Web Worker
Mirip konsep service worker. Memisahkan proses yg berat2 menjadi proses yg berpisah, biar proses ui tidak terganggu. Contoh penggunaan nya adalah, kita bisa menggunakan text recognizer di browser menggunakan Tesseract.js