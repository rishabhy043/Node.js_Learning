const os = require('os');

// Get the CPU architecture
const arch = os.arch();
console.log('CPU Architecture:', arch);

const platform= os.platform();
console.log("platform is: ", platform);

const type= os.type();
console.log("OS type is: ", type);

const uptime= os.uptime();
console.log("uptime is: ", uptime);

const totalmem= os.totalmem();
console.log("platform is: ", totalmem);

const freemem= os.freemem();
console.log("freemem is: ", freemem);

const cpus= os.cpus();
console.log("cpus is: ", cpus);

const hostname= os.hostname();
console.log("hostname is: ", hostname);