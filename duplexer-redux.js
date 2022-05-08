const duplexer = require('duplexer2')
const { Transform } = require('stream')


const counts = {}
module.exports = function (counter) {
    const input = new Transform({
        transform: function (row, encoding, callback) {
            counts[row.country] = (counts[row.country] || 0) + 1
            callback()
        },
        final: function (callback) {
            counter.setCounts(counts)
            callback()
        },
        objectMode: true
    })
    return duplexer({ objectMode: true }, input, counter)
}