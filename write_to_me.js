const { Writable, Readable } = require('stream')



class MyCustomWritable extends Writable{
    constructor(){
        super()
    }

    _write(chunk, encoding, callback) {
        // console.log("",`writing: ${chunk.toString()}`)
        const data  = `writing: ${chunk.toString()}`
        console.log(data)
        callback()
      }
    
}


const stream = new MyCustomWritable()
// readableStream.on('end', () => stream.end())
process.stdin.pipe(stream)

