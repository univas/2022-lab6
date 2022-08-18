const fs = require('fs')

const fileName = 'resources/world_cup.txt'

const content = fs.readFileSync(fileName, 'utf-8')

console.log(`Content file: ${content}`)
