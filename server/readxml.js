const fs = require('fs');
const xml2js = require('xml2js');

// Odczyt pliku XML
fs.readFile('./Migracje.xml', 'utf8', (err, data) => {
    if (err) {
        console.error('Błąd odczytu pliku XML:', err);
        return;
    }

    const parser = new xml2js.Parser();

    // Parsowanie danych XML
    parser.parseString(data, (err, result) => {
        if (err) {
            console.error('Błąd parsowania pliku XML:', err);
            return;
        }

        const xmlData = result;
    });
});
