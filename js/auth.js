// js/auth.js

// 1. Inisialisasi Database Dummy (Jalankan sekali saat aplikasi dimuat)
function initDummyDatabase() {
    // Cek apakah database user sudah ada di localStorage
    if (!localStorage.getItem('db_users')) {
        const dummyUsers = [
            { id: 1, username: 'admin', password: '123', role: 'admin', name: 'Ahmad (Admin)' },
            { id: 2, username: '19850101', password: '123', role: 'guru', name: 'Shino Aburame, S.Pd' },
            { id: 3, username: '0012345678', password: '123', role: 'siswa', name: 'Uzumaki Boruto' },
            { id: 4, username: 'ortu1', password: '123', role: 'ortu', name: 'Hinata Uzumaki' }
        ];
        // Simpan ke localStorage dalam bentuk String (JSON)
        localStorage.setItem('db_users', JSON.stringify(dummyUsers));
    }
}

// 2. Fungsi Login
function login(e) {
    e.preventDefault(); // Mencegah form me-refresh halaman
    
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    
    // Ambil data user dari localStorage
    const users = JSON.parse(localStorage.getItem('db_users'));
    
    // Cari user yang cocok
    const validUser = users.find(u => u.username === usernameInput && u.password === passwordInput);
    
    if (validUser) {
        // Jika berhasil, simpan sesi login ke localStorage
        localStorage.setItem('currentUser', JSON.stringify(validUser));
        alert('Login Berhasil! Selamat datang, ' + validUser.name);
        window.location.href = 'dashboard.html'; // Arahkan ke dashboard
    } else {
        // Jika gagal
        const errorMsg = document.getElementById('login-error');
        errorMsg.style.display = 'block';
        errorMsg.innerText = 'Username/NISN atau Password salah!';
    }
}

// 3. Fungsi Proteksi Halaman Dashboard (Cek apakah sudah login)
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    // Jika tidak ada sesi, tendang kembali ke halaman login
    if (!currentUser) {
        alert('Anda harus login terlebih dahulu!');
        window.location.href = 'login.html';
        return null;
    }
    return currentUser;
}

// 4. Fungsi Logout
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// Jalankan inisialisasi saat file diload
initDummyDatabase();