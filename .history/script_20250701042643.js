// Inisialisasi animasi AOS
AOS.init();

// Data Kurikulum
const tableData = [
    // ... data kamu (tidak saya ulangi di sini karena sudah lengkap di atas)
];

const tbody = document.querySelector('#kurikulumTable tbody');

// Fungsi render tabel
function renderTable(filter) {
    tbody.innerHTML = '';

    let hasPrintedSemester1Header = false;
    let hasPrintedSemester2Header = false;

    tableData.forEach(row => {
        const isVisible = filter === 0 || row.semester === filter || row.isHeader;

        if (!isVisible) return;

        if (row.isHeader) {
            const isS1 = row.semester === 1;
            const isS2 = row.semester === 2;

            if ((filter === 1 && isS1 && !hasPrintedSemester1Header) ||
                (filter === 2 && isS2 && !hasPrintedSemester2Header) ||
                filter === 0) {

                const tr = document.createElement('tr');
                tr.className = 'table-header-row text-center fw-bold'; // class disesuaikan agar konsisten dengan CSS
                const td = document.createElement('td');
                td.setAttribute('colspan', 4);
                td.textContent = row.week;
                tr.appendChild(td);
                tbody.appendChild(tr);

                if (isS1) hasPrintedSemester1Header = true;
                if (isS2) hasPrintedSemester2Header = true;
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
    });
}

// Filter berdasarkan semester
function filterSemester(semester) {
    renderTable(semester);
}

// Toggle dark/light mode
function toggleMode() {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');

    const footer = document.querySelector('footer');
    footer.classList.toggle('bg-light');
    footer.classList.toggle('text-dark');

    // Tambahan untuk pastikan tabel tetap jelas
    const table = document.querySelector('#kurikulumTable');
    table.classList.toggle('table-dark');
}

// Tampilkan semua saat pertama kali
renderTable(0);
