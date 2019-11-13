const controlers = require('./controlers')
const readline = require('readline')
let count = 0


const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout 
});

function question(theQuestion) {
  return new Promise(resolve => rl.question(theQuestion, answ => resolve(answ)))
}

async function askQuestions(options){
  var answer1 = await question(`Is the file located in ${options.dirPath}:  `)
  if(answer1==='n') {
    options.filePath = await question(`New path:  `)
  }
  
  var answer2 = await question("Is the file format CSV?: ")
  if(answer1==='n') {
    options.isTSV = true
  }
  var answer3 = await question("How many fields should each record contain?: ")
  options.numFields = parseInt(answer3)
  console.log('//////////  VIEW RESULTS IN OUT DIRECTORY ///////////')
  controlers.run(options)
  rl.close()
}

  module.exports = {
    askQuestions
  }