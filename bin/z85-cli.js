#!/usr/bin/env node
/* jslint node: true */
'use strict'

var lib = require('../lib/z85-cli')

var userArgs = process.argv.slice(2)
var mode = userArgs[0]
var value = userArgs[1]

try {
  console.log(lib.z85cli(mode, value))
} catch (error) {
  console.error(error.message)
}
