const express = require('express')
const swaggerUi = require('swagger-ui-express')
const router = require('./router/movie.router')
const auth = require('./middleware/auth')
const swaggerJson = require('./openapi.json')
const app = express()

app.use(express.json())
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerJson))
app.use(auth.authentication)
app.use('/api/movies', router)

app.listen(8087, () => console.log('Server up'))