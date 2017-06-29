var Remit = require('remit')

if (!process.env.REMIT_NAME) {
  throw new Error('A name must be provided to connect using Remit')
}

let opts = {
  name: process.env.REMIT_NAME,
  url: process.env.REMIT_URL || 'amqp://localhost'
}

if (!isNaN(Number(process.env.REMIT_PREFETCH))) {
  opts.prefetch = Number(process.env.REMIT_PREFETCH)
}

var remit = Remit(opts)


module.exports = remit
