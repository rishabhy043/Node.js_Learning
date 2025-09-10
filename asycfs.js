const fs = require('fs');
const path = require('path');

const filepath = "Document1.txt";
const Mainfilepath = path.join(__dirname, filepath);

// READING FILE CONTENT BY ASYNCHRONOUS METHOD

fs.readFile(Mainfilepath, "binary", (err, data) => { if(err) console.error(err); else console.log(data);
});


// WRITING INTO THE FILE BY ASYNCHRONOUS METHOD

// fs.writeFile(Mainfilepath,
//     "This file is created by Asynchronous way",
//     'utf-8',
//     (err) => {
//         if (err) {
//             console.log("Error writing file:", err);
//         } else {
//             console.log("File has been saved successfully.");
//         }
//     }
// );



console.log("This message runs before the file is saved.");
