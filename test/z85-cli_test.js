/*jslint node: true */
'use strict';

var z85_cli = require('../lib/z85-cli.js');

exports['z85-cli'] = {
    'no args': function (test) {
        test.expect(1);
        test.throws(function() {z85_cli.z85cli()}, Error, 'throws an error.');
        test.done();
    },
    'wrong mode': function (test) {
        test.expect(1);
        test.throws(function() {z85_cli.z85cli('-x', 'value')}, '', 'throws an error.');
        test.done();
    },
    'decode non-z85 value': function (test) {
        test.expect(1);
        test.throws(function() {z85_cli.z85cli('-d', 'xxx')}, Error, 'throws an error.');
        test.done();
    },
    'encode unencodable value': function (test) {
        test.expect(1);
        test.throws(function() {z85_cli.z85cli('-e', 'xxx')}, Error, 'throws an error.');
        test.done();
    },
    'encode value': function (test) {
        test.expect(1);
        test.equal(z85_cli.z85cli('--encode', 'Test'), 'raQb)', 'returns encoded value.');
        test.done();
    },
    'encode value with shorthand mode': function (test) {
        test.expect(1);
        test.equal(z85_cli.z85cli('-e', 'Test'), 'raQb)', 'returns encoded value.');
        test.done();
    },
    'decode value': function (test) {
        test.expect(1);
        test.equal(z85_cli.z85cli('--decode', 'raQb)'), 'Test', 'returns decoded value.');
        test.done();
    },
    'decode value with shorthand mode': function (test) {
        test.expect(1);
        test.equal(z85_cli.z85cli('-d', 'raQb)'), 'Test', 'returns decoded value.');
        test.done();
    }
};
