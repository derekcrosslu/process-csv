var path = require('path');
const process = require('./app')
let key = 0
const out1 = []
const out2 = []
let numFields = 0
let isTSV = false
let filePath = __dirname 
let fileName = isTSV ? 'data.tsv' : 'data.csv'
const dirPath = path.join(filePath,fileName)
let delimeter = isTSV ? '\t' : ','


process.askQuestions({
    key:key, dirPath:dirPath, delimeter:delimeter,numFields:numFields, out1:out1,out2:out2, isTSV:isTSV
})