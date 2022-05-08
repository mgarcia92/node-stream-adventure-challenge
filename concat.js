const concat = require('concat-stream') 

process.stdin.pipe(concat(function(data){
    const result = data.toString().split('').reverse().join('')
    process.stdout.write(result)
}))