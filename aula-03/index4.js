const http = require('http')
const fs = require('fs')

const fileName = 'resources/index.html'

const server = http.createServer((req, res) => {
    res.statusCode = 200
    
    fs.readFile(fileName, (err, data) => {
        res.end(data)
    })
})

const port = 8087

server.listen(port, () => {
    console.log(`Server up on port: ${port}`)
})