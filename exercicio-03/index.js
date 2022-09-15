const express = require('express')
const router = require('./route/subject.route')

const app = express()
app.use(express.json())
app.use('/subjects', router)

app.listen(8087, () => console.log('Server up!'))
