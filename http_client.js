const { request } = require('http')

const url = "http://localhost:8099"

process.stdin.pipe(request(url, { method: "POST" }, (res) => {
    res.pipe(process.stdout)
}))