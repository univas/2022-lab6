const express = require('express')
const app = express()

app.get('/api/v1/test', (req, res) => {
    res.send('Brasil Hexa!!!')
})

app.listen(8087, () => console.log('Server up!'))