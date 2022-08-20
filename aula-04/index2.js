const fs = require('fs')

const fileName = 'c:\\github\\output\\saida.txt'
const fileContent = 'Brasil hexa campeão!!!'

console.log('Starting app')

console.log(`Creating file ${fileName}`)

fs.writeFileSync(fileName, fileContent)

console.log('File created successfully')
