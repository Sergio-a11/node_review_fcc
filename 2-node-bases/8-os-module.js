const { table } = require('console');
const os = require('os')
//os.version
//info about current user
const user = os.userInfo();
console.log("🚀 ~ file: app.js:5 ~ user", user)
console.log("🚀 ~ file: app.js:3 ~ os.version", os.version())
console.log("🚀 ~ file: app.js:3 ~ os.uptime()", `the system Uptime is ${os.uptime()/60} minutes`)

const currentOS = {
   name: os.type(), 
   release: os.release(), 
   totalMen: os.totalmem(), 
   freemem: os.freemem(), 
}
table(currentOS)