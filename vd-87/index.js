import fs from 'fs';

// const fs = require('fs');

// console.log(fs)

console.log('Starting with ES Modules');
fs.writeFileSync('test1.txt', 'Hello World2!');
console.log('Ending with ES Modules');