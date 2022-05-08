const childProc = require('child_process')
const duplexer2 = require("duplexer2");
module.exports = function (cmd, args) {  
    // spawn the process and return a single stream  
    // joining together the stdin and stdout here  
    const spawn = childProc.spawn(cmd, args)
    return duplexer2([],spawn.stdin, spawn.stdout)
  }  
