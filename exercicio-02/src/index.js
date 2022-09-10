const express = require('express')
const router = require('./router/imovel.router')

const app = express()
app.use(express.json())
app.use('/imoveis', router)

app.listen(8087, () => console.log('Server up on port 8087!'))