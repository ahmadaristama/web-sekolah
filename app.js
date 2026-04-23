document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi Chart jika elemen canvas ditemukan (khusus di halaman dashboard)
    const ctx = document.getElementById('academicChart');
    if (ctx) {
        new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Matematika', 'B. Indonesia', 'IPA', 'IPS', 'B. Inggris', 'Seni Budaya'],
                datasets: [{
                    label: 'Rata-rata Kelas (Kurikulum Merdeka)',
                    data: [82, 88, 85, 80, 84, 90],
                    backgroundColor: '#1E3A8A', // Primary Blue
                    borderRadius: 6,
                    barThickness: 45
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' }
                },
                scales: {
                    y: { 
                        beginAtZero: true, 
                        max: 100,
                        grid: { borderDash: [5, 5] }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }
});