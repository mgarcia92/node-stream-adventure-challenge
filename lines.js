const split2 = require('split2')  
const through2 = require('through2')  

const count = 0

process.stdin
.pipe(split2())
.pipe(through2(function (line, _, next) {
    count++
    if(count % 2 === 0) {
        console.log(line.toString().toUpperCase())
    }else{
        console.log(line.toString().toLowerCase())
    }
    next();
}))
