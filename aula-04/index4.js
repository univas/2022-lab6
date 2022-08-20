const fs = require('fs')

const fileName = 'c:\\github\\output\\saida.txt'
const fileContent = '\nBrasil hexa campeão!'

console.log('Starting app')

console.log(`Creating file ${fileName}`)

fs.appendFileSync(fileName, fileContent)

console.log('File created successfully')
