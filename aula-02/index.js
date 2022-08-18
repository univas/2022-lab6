const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end('Univas 2022')
})

const port = 8087

server.listen(port, () => {
    console.log('server up on 8087!')
})



