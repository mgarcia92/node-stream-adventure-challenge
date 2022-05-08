const http = require('http')  
const { Transform } = require ('stream')

const upper = new Transform({
    transform: function(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase())
        callback()
    }
})


const server = http.createServer(function(req,res){
    if(req.method == "POST"){
        req.pipe(upper).pipe(res)
    }
})

const port = process.argv[2] || 3000

server.listen(port)