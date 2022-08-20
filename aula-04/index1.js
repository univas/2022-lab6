const fs = require('fs')

const directory = 'C:\\github\\output'

console.log('Starting app')

if (fs.existsSync(directory)) {
    console.log(`${directory} already exist!`)

} else {
    console.log(`Creating directory: ${directory}`)
    fs.mkdirSync(directory)
    console.log('Directory create successfully')
}
