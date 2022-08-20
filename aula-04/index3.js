const fs = require('fs')

const fileName = 'c:\\github\\output\\saida.txt'
const fileContent = '\nBrasil hexa campeão!!!'

console.log('Starting app')

console.log(`Creating file ${fileName}`)

fs.writeFileSync(fileName, fileContent, { flag: 'a+' })

console.log('File created successfully')
