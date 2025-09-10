const path = require("path");

console.log(__filename);
console.log(__dirname);

const filepath = path.join("student", "indian", "up");
const extName = path.extname(filepath);
const resolve = path.resolve(filepath);
const parse = path.parse(filepath);
const basename = path.basename(filepath);
const dirnam = path.dirname(filepath);
const separator = path.sep; // Correct usage: property, not function

console.log({ filepath, extName, resolve, parse, basename, dirnam, separator });
console.log(filepath, extName, resolve);