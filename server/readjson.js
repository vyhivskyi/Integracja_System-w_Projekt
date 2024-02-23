const fs = require('fs');

// Odczyt pliku JSON
fs.readFile('./ceny_mieszkan.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Błąd odczytu pliku JSON:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
    } catch (err) {
        console.error('Błąd parsowania pliku JSON:', err);
    }
});
