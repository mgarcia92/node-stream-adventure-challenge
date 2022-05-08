const trumpet = require('trumpet')
const tr = trumpet()
const { Transform } = require ('stream')

const upper = new Transform({
    transform: function(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase())
        callback()
    }
})

const loud = tr.select('.loud').createStream()
loud.pipe(upper).pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)