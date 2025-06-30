// script.js
AOS.init();

const tableData = [
    { week: 'Semester 1 - Dasar Desain Grafis', isHeader: true, semester: 1 },
    { week: 1, materi: 'Pengenalan Desain Grafis & Dunia Kerja Kreatif', tujuan: 'Memahami peran desain dalam industri & kehidupan', tugas: 'Tulis artikel: “Apa itu desain grafis dan kenapa penting?”', semester: 1 },
    { week: 2, materi: 'Elemen Visual: Garis, Bentuk, Tekstur', tujuan: 'Mengenal dan membuat elemen visual dasar', tugas: 'Desain stiker sederhana bertema sekolah', semester: 1 },
    { week: 3, materi: 'Ruang, Ukuran, Warna', tujuan: 'Memahami ruang, ukuran dan teori warna dasar', tugas: 'Analisis poster PPDB Mutipuga dari segi ruang & proporsi', semester: 1 },
    { week: 'Semester 2 - Desain Grafis Menengah (Middle)', isHeader: true, semester: 2 },
    { week: 21, materi: 'Review & Target Level Menengah', tujuan: 'Review elemen & prinsip desain, pahami ekspektasi level menengah', tugas: 'Presentasi karya terbaik dari semester 1 dan refleksi tantangan', semester: 2 },
];

const tbody = document.querySelector('#kurikulumTable tbody');

function renderTable(filter) {
    tbody.innerHTML = '';
    tableData.forEach(row => {
        if (filter === 0 || row.semester === filter || row.isHeader) {
            const tr = document.createElement('tr');

            if (row.isHeader) {
                tr.className = 'table-primary text-center fw-bold';
                const td = document.createElement('td');
                td.setAttribute('colspan', 4);
                td.textContent = row.week;
                tr.appendChild(td);
            } else {
                tr.innerHTML = `
              <td>${row.week}</td>
              <td>${row.materi}</td>
              <td>${row.tujuan}</td>
              <td>${row.tugas}</td>
            `;
            }
            tbody.appendChild(tr);
        }
    });
}

function filterSemester(semester) {
    renderTable(semester);
}

function toggleMode() {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
    document.querySelector('footer').classList.toggle('bg-light');
    document.querySelector('footer').classList.toggle('text-dark');
}

renderTable(0); // default: show all
  </script >