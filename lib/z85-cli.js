#!/usr/bin/env node
/*jslint node: true */
'use strict';

var z85 = require('z85');

var z85cli = function (mode, value) {
    if (mode && value) {
        if (mode === '--encode' || mode === '-e') {
            var encoded = z85.encode(value);
            if (encoded) {
                console.log(encoded);
                return encoded;
            } else {
                console.error('Input cannot be z85 encoded. See http://rfc.zeromq.org/spec:32');
            }
        } else if (mode === '--decode' || mode === '-d') {
            var decoded = z85.decode(value);
            if (decoded) {
                decoded = decoded.toString();
                console.log(decoded);
                return decoded;
            } else {
                console.error('Input not recognized as z85 encoded. See http://rfc.zeromq.org/spec:32');
            }
        } else {
            logDocumentation();
        }
    } else {
        logDocumentation();
    }
};

function logDocumentation() {
    console.error('\nRun options:\n' +
        ' `z85 --encode [-e] <value>`\n' +
        ' `z85 --decode [-d] <value>`');
}

exports.z85cli = z85cli;

var userArgs = process.argv.slice(2),
    mode = userArgs[0],
    value = userArgs[1];

if (mode !== 'nodeunit') {
    z85cli(mode, value);
}