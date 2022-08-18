const fs = require('fs')

const fileName = 'resources/world_cup.txt'

fs.readFile(fileName, (err, data) => {
    console.log(`Content File: ${data}`)
})
