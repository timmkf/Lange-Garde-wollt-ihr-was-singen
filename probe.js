let Strophensammlung = [];

// index.js
const XLSX = require('xlsx');

// Lade die Excel-Datei
const workbook = XLSX.readFile('LGsongs.xlsx');

// Wähle das gewünschte Arbeitsblatt aus
const worksheet = workbook.Sheets['Mode1'];

// Lese den Wert der Zelle A1
for (let i = 269; i <= 270; i++) {
    let cellAddress = "B" + i;
    let desiredCell = worksheet[cellAddress];
    
    if (desiredCell) {
        Strophensammlung.push(desiredCell.v);
    }
}
console.log(Strophensammlung)





  
  