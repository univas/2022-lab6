const express = require('express')
const router = require('./router/movie.router')
const auth = require('./middleware/auth')
const app = express()

app.use(express.json())
app.use(auth.authentication)
app.use('/api/movies', router)

app.listen(8087, () => console.log('Server up'))