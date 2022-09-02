const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.get('/university', (req, res) => {
    res.send('Univás!!!')
})

app.use('/world-cup', express.static(path.join(__dirname, 'html')))

app.listen(8087, () => console.log('Server up on port 8087!'))
