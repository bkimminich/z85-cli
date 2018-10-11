# z85-cli [![npm](https://img.shields.io/npm/v/:z85-cli.svg)](https://www.npmjs.com/package/z85-cli) [![npm Downloads](https://img.shields.io/npm/dm/z85-cli.svg)](https://www.npmjs.com/package/z85-cli)

[![Build Status](https://secure.travis-ci.org/bkimminich/z85-cli.png?branch=master)](http://travis-ci.org/bkimminich/z85-cli)
[![Coverage Status](https://img.shields.io/coveralls/bkimminich/z85-cli.svg)](https://coveralls.io/r/bkimminich/z85-cli)
[![Code Climate](https://codeclimate.com/github/bkimminich/z85-cli/badges/gpa.svg)](https://codeclimate.com/github/bkimminich/z85-cli)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/bkimminich/z85-cli.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/bkimminich/z85-cli/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/bkimminich/z85-cli.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/bkimminich/z85-cli/alerts/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Greenkeeper badge](https://badges.greenkeeper.io/bkimminich/z85-cli.svg)](https://greenkeeper.io/)

Command line client for ZeroMQ Base-85 encoding

## Getting Started
Install the module with:

```
npm install -g z85-cli
```

## Documentation

### Encoding
```
z85 --encode [-e] <value>
```

### Decoding
```
z85 --decode [-d] <value>
```

## Specification

Please refer to [32/Z85 - ZeroMQ Base-85 Encoding Algorithm](http://rfc.zeromq.org/spec:32). 

## License
Copyright (c) 2014-2018 Bjoern Kimminich
Licensed under the MIT license.
