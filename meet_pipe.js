const fs = require('fs')
const [_0,_1,filename]  = process.argv
fs.createReadStream(`${filename}`).pipe(process.stdout)
