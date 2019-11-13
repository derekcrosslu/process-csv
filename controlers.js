const fs = require('fs')
const fcsv = require('fast-csv')

const readFile = (path, opts = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.readFile(path, opts, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })

const writeFile = (path, data, opts = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, opts, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })

  const run = async (options) => {
    const res = await readFile(options.dirPath)
    const stream = fcsv
                            .parse({ headers: false, delimiter: `${options.delimeter}` })
                            .validate(data => {
                                return data.length===options.numFields
                            })
                            .on('error', error => console.error(error))
                            .on('data', row => {
                            
                                options.key++
                                options.out1[options.key]=row+'\n'
                                if(options.out1[options.numFields]) {
                                    delete options.out1[1]  // removing headers and 
                                    console.log('out-valid.csv');
                                    writeFile('out/out-valid.csv',options.out1.join('')  )
                                }
                            })
                            .on('data-invalid', (row) => {        
                                options.out2.push(row+'\n')
                                console.log('out-invalid.csv');
                                writeFile('out/out-invalid.csv',options.out2)
                            })
    stream.write(res);
    stream.end();
  }

module.exports = {
    readFile,
    writeFile,
    run
  }

