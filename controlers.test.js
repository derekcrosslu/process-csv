const controlers  = require('./controlers.js')
var path = require('path');
const process = require('./app')
var bddStdin = require('bdd-stdin');
let key = 0
const out1 = []
const out2 = []
let numFields = 0
let isTSV = false
let filePath = __dirname 
let fileName = isTSV ? 'data.tsv' : 'data.csv'
const dirPath = path.join(filePath,fileName)
let delimeter = isTSV ? '\t' : ','

const options = {
    key:key, dirPath:dirPath, delimeter:delimeter,numFields:numFields, out1:out1,out2:out2, isTSV:isTSV
}

describe('options', function () {
  it('asserting options', function () {
    bddStdin('answer');
    return controlers.run(options)
      .then(function () {
        console.assert(options.delimeter === ',');
        console.assert(options.numFields === 0);
        console.assert(options.isTSV === false);
      });
  });
});
  