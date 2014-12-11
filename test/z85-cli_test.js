/*jslint node: true */
'use strict';

var z85_cli = require('../lib/z85-cli.js');

exports['z85-cli'] = {
    setUp: function (done) {
        // setup here
        done();
    },
    'no args': function (test) {
        test.expect(1);
        // tests here
        test.equal(z85_cli.z85cli(), undefined, 'does not return anything.');
        test.done();
    },
    'wrong mode': function (test) {
        test.expect(1);
        // tests here
        test.equal(z85_cli.z85cli('-x', 'value'), undefined, 'does not return anything.');
        test.done();
    },
    'decode non-z85 value': function (test) {
        test.expect(1);
        // tests here
        test.equal(z85_cli.z85cli('-d', 'xxx'), undefined, 'does not return anything.');
        test.done();
    },
    'encode unencodable value': function (test) {
        test.expect(1);
        // tests here
        test.equal(z85_cli.z85cli('-e', 'xxx'), undefined, 'does not return anything.');
        test.done();
    },
    'encode value': function (test) {
        test.expect(1);
        // tests here
        test.equal(z85_cli.z85cli('--encode', 'Test'), 'raQb)', 'returns encoded value.');
        test.done();
    },
    'encode value with shorthand mode': function (test) {
        test.expect(1);
        // tests here
        test.equal(z85_cli.z85cli('-e', 'Test'), 'raQb)', 'returns encoded value.');
        test.done();
    },
    'decode value': function (test) {
        test.expect(1);
        // tests here
        test.equal(z85_cli.z85cli('--decode', 'raQb)'), 'Test', 'returns decoded value.');
        test.done();
    },
    'decode value with shorthand mode': function (test) {
        test.expect(1);
        // tests here
        test.equal(z85_cli.z85cli('-d', 'raQb)'), 'Test', 'returns decoded value.');
        test.done();
    }
};
