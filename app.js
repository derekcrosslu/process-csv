
const fs = require('fs')
const readline = require('readline');

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

rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
 });

function question(theQuestion) {
    return new Promise(resolve => rl.question(theQuestion, answ => resolve(answ)))
}

function cases(result){
    switch(result){
        case '1':
            console.log('result 1');
            writeAndRead().then(ok=>{
                console.log(ok);
                
            })
            break;
        case '2':
            console.log('result 2');
            break;
        case '3':
            console.log('result 3');
            break;
        default:
            console.log('no answer');
    }
}

async function askQuestions(){
    var answer1 = await question("Where is the file located?: ")
    cases(answer1)
    // var answer2 = await question("Is the file format CSV (comma-separated values) or TSV (tab-separated values)?: ")
    // cases(answer2)
    // var answer3 = await question("How many fields should each record contain?: ")
    // cases(answer3)

    // var result = answer1 + ' ' + answer2 +  ' ' + answer3 +'\n'
    // var result = answer1 || answer2 || answer3 
    // writeAndRead().then(content => {
    //     console.log(`The sum of above two numbers is ${result}`, content)
    // })
    // console.log(result);
    

    
    rl.close()
}

module.exports = {
    readFile,
    writeFile,
    askQuestions
  }

