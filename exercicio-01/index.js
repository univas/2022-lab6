const fs = require('fs')
const path = require('path')

if (process.argv.length !== 4) {
    console.log('Por favor informe os argumentos corretamente')
    return
}

const inputFolder = process.argv[2]
const outputFile = process.argv[3]

console.log(`Diretorio de entrada: ${inputFolder}`)
console.log(`Arquivo de saida: ${outputFile}`)

const files = fs.readdirSync(inputFolder)
    .filter(file => file.endsWith('.txt'))

files.forEach(file => {
    const fileContent = fs.readFileSync(inputFolder + path.sep + file)
        
    fs.appendFileSync(outputFile, file)
    fs.appendFileSync(outputFile, "\n" + fileContent)
    fs.appendFileSync(outputFile, "\n...\n")
})

