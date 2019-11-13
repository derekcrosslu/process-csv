const process = require('./app')
const fcsv = require('fast-csv')
const obj = {}
let key = 0
const out1 = []
const out2 = []
// process.askQuestions()

const run = async () => {
    const res = await process.readFile('./data.csv')
    const stream = fcsv
                            .parse({ headers: false })
                            .validate(data => {
                                return data.length===3
                            })
                            .on('error', error => console.error(error))
                            .on('data', row => {
                                key++
                                out1[key]=row+'\n'
                                if(out1[3]) {
                                    delete out1[1]  // removing headers
                                    process.writeFile('out/out-valid.csv',out1.join('')  )
                                }
                            })
                            .on('data-invalid', (row) => {        
                                out2.push(row+'\n')
                                console.log('i',row);
                                process.writeFile('out/out-invalid.csv',out2)
                            })
    stream.write(res);
    stream.end();
  }
  
  run()