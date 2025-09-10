const { promises } = require('dns');
const fs = require('fs');
const path = require('path');



// WRITING INTO FILE BY PROMISES

const file = __filename;
fs.promises.writeFile(file, "this is the content", 'utf-8').then((data) =>console.log(data)).catch((error) =>console.log(error));

// READING FROM THE FILE

fs.promises.readFile(file,'utf-8').then((data)=>console.log(data)).catch((err)=>console.log(err));

//  const file = __filename;
// fs.promises
//     .readdir(file)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
