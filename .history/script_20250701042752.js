// Inisialisasi animasi AOS
AOS.init();

// Data lengkap Week 1–40 (sudah kamu tulis, tidak saya ulangi di sini)
const tbody = document.querySelector('#kurikulumTable tbody');

// Render tabel berdasarkan semester
function renderTable(filter) {
    tbody.innerHTML = '';
    let hasPrintedSemester1Header = false;
    let hasPrintedSemester2Header = false;

    tableData.forEach(row => {
        const shouldRender =
            filter === 0 || row.semester === filter || row.isHeader;

        if (!shouldRender) return;

        if (row.isHeader) {
            const isS1 = row.semester === 1;
            const isS2 = row.semester === 2;

            const needToPrintHeader =
                (filter === 1 && isS1 && !hasPrintedSemester1Header) ||
                (filter === 2 && isS2 && !hasPrintedSemester2Header) ||
                filter === 0;

            if (needToPrintHeader) {
                const tr = document.createElement('tr');
                tr.className = 'table-header-row text-center fw-bold'; // Gunakan class khusus

                const td = document.createElement('td');
                td.setAttribute('colspan', 4);
                td.textContent = row.week;

                tr.appendChild(td);
                tbody.appendChild(tr);

                if (isS1) hasPrintedSemester1Header = true;
                if (isS2) hasPrintedSemester2Header = true;
            }
        } else {
            const tr = document.createElement('tr');
            tr.innerHTML = `
        <td>${row.week}</td>
        <td>${row.materi}</td>
        <td>${row.tujuan}</td>
        <td>${row.tugas}</td>
      `;
            tbody.appendChild(tr);
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

    // Tambahan untuk memastikan header tetap terlihat
    const headers = document.querySelectorAll('.table-header-row');
    headers.forEach(header => {
        header.classList.toggle('dark-header');
    });
}

// Tampilkan semua data saat awal
renderTable(0);
