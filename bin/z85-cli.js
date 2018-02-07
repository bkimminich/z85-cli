#!/usr/bin/env node
/* jslint node: true */
const lib = require('../lib/z85-cli')

const userArgs = process.argv.slice(2)
const mode = userArgs[0]
const value = userArgs[1]

try {
  console.log(lib.z85cli(mode, value))
} catch (error) {
  console.error(error.message)
}
