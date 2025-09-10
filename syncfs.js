
const fs = require('fs');
 const path = require('path'); 

const filename = "file121.txt";
const filepath = path.join(__dirname, filename);

//  WRITING INTO THE FILE

// console.log(filepath);
// const writeFile=fs.writeFileSync(filepath, "This is not created by fs module", 'utf-8');
// console.log("File has been written successfully.");
// console.log(writeFile);


// READING DATA FROM THE FILE

// const readFile = fs.readFileSync(filepath);
// console.log(readFile.toString());
// console.log("File readed succesfully");


//    APPEND DATA TO THE FILE

// const appenddata = fs.appendFileSync(
//     filepath, "this si append data" , 'utf-8'
// )
// console.log(appenddata);

// DELETING FILE B ITS PATH

// const deletefiel =fs.unlinkSync(filepath);
// console.log(deletefiel);
// console.log("File deleted");

// RECOVER DELETED FILE By ITS PATH

// const deletefiel =fs.unlinkSync(filepath);
// console.log(deletefiel);
// console.log("File deleted");


// RENAME FILE

const newAPth = "file.txt";
const newFilepath = path.join(__dirname, newAPth);
const renamefile = fs.renameSync(filepath, newFilepath  );
console.log(renamefile);