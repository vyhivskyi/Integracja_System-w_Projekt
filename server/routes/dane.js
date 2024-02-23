const router = require("express").Router();
const bcrypt = require("bcrypt");
const fs = require('fs');
const xml2js = require('xml2js');
let xmlData = null;
let jsonData = null;

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

        xmlData = result;
    });
});
// Odczyt pliku JSON
fs.readFile('./ceny_mieszkan.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Błąd odczytu pliku JSON:', err);
        return;
    }

    try {
        jsonData = JSON.parse(data);
    } catch (err) {
        console.error('Błąd parsowania pliku JSON:', err);
    }
});

router.get("/", (req, res) => {
    try {
        const data = {
            cenaMieszkan: jsonData,
            migracja: xmlData
        }
        res.status(200).send({ data: data });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})
module.exports = router;
