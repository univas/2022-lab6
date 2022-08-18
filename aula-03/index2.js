const fs = require('fs')

const fileName = 'resources/world_cup.txt'

fs.readFileSync(fileName, 'utf-8')
    .trim()
    .split('\n')
    .forEach(line => {
        if (line.trim() !== '')
            console.log(`Seleção: ${line}`)
    })
