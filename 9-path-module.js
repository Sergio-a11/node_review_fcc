const path = require('path');

console.log(path.sep); //separador que se debe usar ;v

//unir partes de una ruta de manera correcta
const filePath = path.join('./content', 'subfolder', 'test.txt')
console.log("🚀 ~ file: app.js:6 ~ filePath", filePath)

const baseName = path.basename(filePath)
console.log("🚀 ~ file: app.js:10 ~ baseName", baseName)

//
console.log("🚀 ~ file: app.js:13 ~ path.extname", path.extname(filePath))


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log("🚀 ~ file: app.js:17 ~ absolute", absolute)
