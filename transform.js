
const { Transform } = require ('stream')


const upper = new Transform({
    transform: function(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase())
        callback()
    }
})


process.stdin.pipe(upper).pipe(process.stdout)