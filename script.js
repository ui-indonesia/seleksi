document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nim = document.getElementById('search-nim').value;
    const resultsSection = document.getElementById('results-section');

    // Clear previous results
    resultsSection.innerHTML = '';

    // Simulate searching for NIM and display result
    // In a real application, you would make an AJAX request to the server
    if (nim === '123456789') {
        resultsSection.innerHTML = `
            <p>Selamat! Anda diterima.</p>
            <p>Nama: M. Aditya Ramadhan</p>
            <p>Fakultas: Ilmu Komputer</p>
        `;
    } else {
        resultsSection.innerHTML = '<p>Maaf, Anda tidak diterima.</p>';
    }
});
