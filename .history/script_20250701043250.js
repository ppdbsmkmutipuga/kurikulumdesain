// Inisialisasi animasi AOS
AOS.init();

// Data lengkap Week 1–40
const tableData = [
    { week: 'Semester 1 - Dasar Desain Grafis', isHeader: true, semester: 1 },
    { week: 1, materi: 'Pengenalan Desain Grafis & Dunia Kerja Kreatif', tujuan: 'Memahami peran desain dalam industri & kehidupan', tugas: 'Tulis artikel: “Apa itu desain grafis dan kenapa penting?”', semester: 1 },
    { week: 2, materi: 'Elemen Visual: Garis, Bentuk, Tekstur', tujuan: 'Mengenal dan membuat elemen visual dasar', tugas: 'Desain stiker sederhana bertema sekolah', semester: 1 },
    { week: 3, materi: 'Ruang, Ukuran, Warna', tujuan: 'Memahami ruang, ukuran dan teori warna dasar', tugas: 'Analisis poster PPDB Mutipuga dari segi ruang & proporsi', semester: 1 },
    { week: 4, materi: 'Keseimbangan & Kontras', tujuan: 'Mengatur keseimbangan simetris/asimetris & kontras', tugas: 'Desain brosur satu halaman bertema ekstrakurikuler', semester: 1 },
    { week: 5, materi: 'Penekanan, Irama, Pola', tujuan: 'Mengatur perhatian visual melalui elemen penekanan', tugas: 'Desain cover majalah siswa yang menarik perhatian', semester: 1 },
    { week: 6, materi: 'Kesatuan & Proporsi', tujuan: 'Menciptakan harmoni dan keselarasan visual', tugas: 'Desain spanduk hari besar nasional', semester: 1 },
    { week: 7, materi: 'Pengenalan Software Vektor', tujuan: 'Mengenal tools dasar pada software desain vektor', tugas: 'Replika logo sekolah menggunakan shape dan warna', semester: 1 },
    { week: 8, materi: 'Objek & Gradasi Warna', tujuan: 'Mengatur layer dan memberi efek gradasi', tugas: 'Buat ilustrasi simpel bertema sekolah', semester: 1 },
    { week: 9, materi: 'Pen Tool Dasar', tujuan: 'Membuat garis & kurva presisi dengan Pen Tool', tugas: 'Tracing ikon budaya Indonesia (batik, angklung)', semester: 1 },
    { week: 10, materi: 'Pen Tool Lanjutan & Pathfinder', tujuan: 'Gabungkan bentuk kompleks dengan Pathfinder', tugas: 'Desain logo kegiatan OSIS', semester: 1 },
    { week: 11, materi: 'Tipografi: Anatomi & Klasifikasi', tujuan: 'Mengenal struktur huruf dan jenis font', tugas: 'Identifikasi font dari 5 poster sekolah', semester: 1 },
    { week: 12, materi: 'Tipografi: Hirarki & Keterbacaan', tujuan: 'Membuat layout teks yang menarik dan jelas', tugas: 'Desain kutipan motivasi dengan hirarki visual', semester: 1 },
    { week: 13, materi: 'Teori Warna Lanjutan', tujuan: 'Mengenal RGB, CMYK & harmoni warna', tugas: 'Buat palet warna sekolah dalam skema analogus & komplementer', semester: 1 },
    { week: 14, materi: 'Pengenalan Software Bitmap', tujuan: 'Mengenal layer & tools dasar pengeditan foto', tugas: 'Edit warna foto kegiatan sekolah', semester: 1 },
    { week: 15, materi: 'Seleksi & Layer Mask', tujuan: 'Mengolah gambar dengan teknik seleksi', tugas: 'Manipulasi gambar bertema “SMK Hebat”', semester: 1 },
    { week: 16, materi: 'Retouch & Adjustment', tujuan: 'Melakukan koreksi warna dan pencahayaan', tugas: 'Edit ulang foto agar tampil profesional', semester: 1 },
    { week: 17, materi: 'Layout & Grid', tujuan: 'Menerapkan grid dan alignment', tugas: 'Desain kartu pelajar atau ID panitia', semester: 1 },
    { week: 18, materi: 'Proyek Poster / Sosmed', tujuan: 'Gabungkan semua elemen menjadi satu karya', tugas: 'Desain poster kegiatan sekolah atau feed IG', semester: 1 },
    { week: 19, materi: 'Ekspor & Format File', tujuan: 'Menyiapkan desain untuk cetak & digital', tugas: 'Ekspor desain ke JPG, PNG, dan PDF', semester: 1 },
    { week: 20, materi: 'Presentasi Portofolio', tujuan: 'Menampilkan hasil belajar dan refleksi', tugas: 'Presentasi portofolio mini + evaluasi teman sebaya', semester: 1 },
    { week: 'Semester 2 - Desain Grafis Menengah (Middle)', isHeader: true, semester: 2 },
    { week: 21, materi: 'Review & Target Level Menengah', tujuan: 'Review elemen & prinsip desain, pahami ekspektasi level menengah', tugas: 'Presentasi karya terbaik dari semester 1 dan refleksi tantangan', semester: 2 },
    { week: 22, materi: 'Appearance Panel & Effects (Illustrator)', tujuan: 'Menguasai efek non-destruktif & multiple style dalam satu objek', tugas: 'Desain ikon kompleks dengan minimal 3 efek dan simpan sebagai style', semester: 2 },
    { week: 23, materi: 'Brushes & Patterns (Illustrator)', tujuan: 'Membuat brush kustom dan pola seamless', tugas: 'Buat brush art dan pola geometris untuk diaplikasikan ke desain', semester: 2 },
    { week: 24, materi: 'Gradient Mesh & Blending', tujuan: 'Pewarnaan realistis dan transisi bentuk halus', tugas: 'Ilustrasi objek dengan mesh dan blending', semester: 2 },
    { week: 25, materi: 'Advanced Masking & Channel (Photoshop)', tujuan: 'Seleksi objek kompleks seperti rambut atau daun', tugas: 'Gabungkan hasil seleksi ke latar belakang baru', semester: 2 },
    { week: 26, materi: 'Smart Objects & Non-Destructive Workflow', tujuan: 'Menggunakan Smart Object dan Smart Filter dalam editing', tugas: 'Edit foto dengan teknik non-destruktif dan simpan editable', semester: 2 },
    { week: 27, materi: 'Compositing & Manipulasi Foto', tujuan: 'Gabungkan beberapa gambar menjadi satu komposisi yang harmonis', tugas: 'Buat karya bertema surealis/fantasi dengan minimal 3 gambar', semester: 2 },
    { week: 28, materi: 'Font Pairing & Hirarki Tipografi Lanjut', tujuan: 'Gunakan kombinasi font yang efektif dan hirarki teks yang kompleks', tugas: 'Desain halaman majalah atau web dengan 3 level teks dan font pairing', semester: 2 },
    { week: 29, materi: 'Typographic Grid & Readability', tujuan: 'Menggunakan grid dan memahami keterbacaan teks panjang', tugas: 'Rancang ulang artikel agar lebih rapi dan nyaman dibaca', semester: 2 },
    { week: 30, materi: 'Psikologi Warna & Palet Kustom', tujuan: 'Pahami pengaruh warna terhadap persepsi', tugas: 'Buat 2 palet warna untuk brand fiktif, berikan justifikasi', semester: 2 },
    { week: 31, materi: 'Logo & Identitas Visual Dasar', tujuan: 'Pahami jenis-jenis logo dan elemen visual', tugas: 'Analisis logo UKM lokal dan berikan saran pengembangan', semester: 2 },
    { week: 32, materi: 'Logo Variasi & Style Guide Dasar', tujuan: 'Desain versi logo berbeda dan panduan penggunaannya', tugas: 'Buat minimal 3 versi logo + 1 halaman style guide sederhana', semester: 2 },
    { week: 33, materi: 'InDesign: Master Pages', tujuan: 'Mengenal interface dan penggunaan master page', tugas: 'Desain dokumen 4 halaman dengan elemen tetap', semester: 2 },
    { week: 34, materi: 'InDesign: Styles & Text Flow', tujuan: 'Membuat paragraph styles dan mengatur aliran teks', tugas: 'Desain artikel dummy dengan text threading dan paragraph styles', semester: 2 },
    { week: 35, materi: 'UI/UX Design Principles', tujuan: 'Memahami prinsip dasar usability dan perbedaan UI/UX', tugas: 'Analisis aplikasi populer dan evaluasi prinsip usability-nya', semester: 2 },
    { week: 36, materi: 'Desain Elemen UI Dasar', tujuan: 'Desain tombol, form, dan komponen lain dengan berbagai state', tugas: 'Buat set UI: tombol, form, card dengan tampilan konsisten', semester: 2 },
    { week: 37, materi: 'Brief, Riset & Moodboard', tujuan: 'Menganalisis brief dan membuat visual moodboard', tugas: 'Buat moodboard untuk proyek branding fiktif', semester: 2 },
    { week: 38, materi: 'Proyek Integratif', tujuan: 'Menggabungkan semua skill dalam satu proyek besar', tugas: 'Lanjutkan proyek branding/brosur/UI berdasarkan brief', semester: 2 },
    { week: 39, materi: 'Print & Web Optimization', tujuan: 'Optimalkan file desain untuk cetak dan web', tugas: 'Ekspor proyek ke versi cetak (PDF) dan digital (JPG/PNG)', semester: 2 },
    { week: 40, materi: 'Portfolio Review & Karir', tujuan: 'Review proyek akhir dan diskusi karir desain', tugas: 'Presentasikan proyek akhir + 3–5 karya untuk portofolio mini', semester: 2 },
];

const tbody = document.querySelector('#kurikulumTable tbody');

function renderTable(filter) {
    tbody.innerHTML = '';
    let hasPrintedSemester1Header = false;
    let hasPrintedSemester2Header = false;
    tableData.forEach(row => {
        if (filter === 0 || row.semester === filter || row.isHeader) {
            if (row.isHeader) {
                if ((filter === 1 && row.semester === 1 && !hasPrintedSemester1Header) ||
                    (filter === 2 && row.semester === 2 && !hasPrintedSemester2Header) ||
                    filter === 0) {
                    const tr = document.createElement('tr');
                    tr.className = 'table-header-row text-center fw-bold';
                    const td = document.createElement('td');
                    td.setAttribute('colspan', 4);
                    td.textContent = row.week;
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                    if (row.semester === 1) hasPrintedSemester1Header = true;
                    if (row.semester === 2) hasPrintedSemester2Header = true;
                }
            } else {
                if (filter === 0 || row.semester === filter) {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
            <td>${row.week}</td>
            <td>${row.materi}</td>
            <td>${row.tujuan}</td>
            <td>${row.tugas}</td>
          `;
                    tbody.appendChild(tr);
                }
            }
        }
    });
}

function filterSemester(semester) {
    renderTable(semester);
}

function toggleMode() {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
}

renderTable(0);
