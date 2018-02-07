/* jslint node: true */
const z85 = require('z85')

const z85cli = (mode, value) => {
  if (!mode || !value) {
    throw logDocumentation()
  }
  if (isEncode(mode)) {
    return encode(value)
  } else if (isDecode(mode)) {
    return decode(value)
  }
  throw logDocumentation()
}

function isEncode (mode) {
  return mode === '--encode' || mode === '-e'
}

function isDecode (mode) {
  return mode === '--decode' || mode === '-d'
}

function encode (value) {
  const encoded = z85.encode(value)
  if (encoded) {
    return encoded
  }
  throw encodingError()
}

function decode (value) {
  let decoded = z85.decode(value)
  if (decoded) {
    decoded = decoded.toString()
    return decoded
  }
  throw decodingError()
}

function logDocumentation () {
  return new Error('\nRun options:\n' +
        ' `z85 --encode [-e] <value>`\n' +
        ' `z85 --decode [-d] <value>`')
}

function encodingError () {
  return new Error('Input cannot be z85 encoded. See http://rfc.zeromq.org/spec:32')
}

function decodingError () {
  return new Error('Input not recognized as z85 encoded. See http://rfc.zeromq.org/spec:32')
}

exports.z85cli = z85cli
