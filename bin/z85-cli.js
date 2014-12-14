#!/usr/bin/env node
/*jslint node: true */
'use strict';

var lib = require('../lib/z85-cli');

var userArgs = process.argv.slice(2),
    mode = userArgs[0],
    value = userArgs[1];

    try {
        console.log(lib.z85cli(mode, value));
    } catch (error) {
        console.error(error.message);
    }

