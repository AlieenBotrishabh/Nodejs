// const names = require('./names.js');
// const { sayHi } = require('./util.js');
// const list = require('./items.js')

// sayHi("Car");
// sayHi(names.a);
// sayHi(names.b);

const os = require('os');
const path = require('path')

// const user = os.userInfo()
// console.log(user);

// console.log(`System uptime is${os.uptime()}`);


// const currentOS = {
//     name: os.type(),
//     release: os.release,
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS);

// console.log(path.sep);
// const filePath = path.join('/content','subfolder','test.txt');
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname,'/content','subfolder','test.txt');
// console.log(absolute);


const {readFileSync, writeFileSync} = require('fs');
const fs = require('fs');

const first = readFileSync('./content/file1.txt','UTF8');
const second = readFileSync('./content/file2.txt','UTF8');

console.log(first);

writeFileSync('./content/resultsync.txt',`Here is the result${first}, ${second}`,{flag: 'ahtml'});