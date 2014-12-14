/*jslint node: true */
'use strict';

var z85 = require('z85');

var z85cli = function (mode, value) {
    if (mode && value) {
        if (mode === '--encode' || mode === '-e') {
            var encoded = z85.encode(value);
            if (encoded) {
                return encoded;
            } else {
                throw new Error('Input cannot be z85 encoded. See http://rfc.zeromq.org/spec:32');
            }
        } else if (mode === '--decode' || mode === '-d') {
            var decoded = z85.decode(value);
            if (decoded) {
                decoded = decoded.toString();
                return decoded;
            } else {
                throw new Error('Input not recognized as z85 encoded. See http://rfc.zeromq.org/spec:32');
            }
        } else {
            throw logDocumentation();
        }
    } else {
        throw logDocumentation();
    }
};

function logDocumentation() {
    return new Error('\nRun options:\n' +
        ' `z85 --encode [-e] <value>`\n' +
        ' `z85 --decode [-d] <value>`');
}

exports.z85cli = z85cli;