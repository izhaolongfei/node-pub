// v1
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`你叫什么名字?`, name => {
    console.log(`你好 ${name}!`)
    readline.close()
})

// v2
const inquirer = require('inquirer')

var questions = [
    {
        type: 'input',
        name: 'name',
        message: "你叫什么名字?"
    }
]

inquirer.prompt(questions).then(answers => {
    console.log(`你好 ${answers['name']}!`)
})