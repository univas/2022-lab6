const express = require('express')
const app = express()

app.get('/api/v1/test', (req, res) => {
    res.send('Brasil Hexa!!!')
})

const port = process.env.PORT || 8087 

app.listen(port, () => 
    console.log(`Server up on port ${port}!`))