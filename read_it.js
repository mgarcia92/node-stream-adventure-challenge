const { Readable } = require('stream')


class MyCustomReadable extends Readable{
    constructor(content){
        super()
        this.push(content)
    }
    _read(){
  
    }
}

const content = process.argv[2]
const stream = new MyCustomReadable(content)
stream.pipe(process.stdout)


