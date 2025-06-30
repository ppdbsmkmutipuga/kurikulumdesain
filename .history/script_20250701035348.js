// script.js
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('#kurikulumTable tbody tr');

    rows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = '#e0f2fe';
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = '';
        });
    });
});
