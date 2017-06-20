var Remit = require('remit')
var Promise = require('bluebird')

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

remit = Promise.promisifyAll(remit, {
  filter: function (name) {
    return (['req', 'treq'].indexOf(name) > -1)
  },

  context: remit
})

module.exports = remit
