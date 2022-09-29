const express = require('express')
const router = require('./router/customer.route')

const app = express()

app.use('/api/v1/customer', router)

app.listen(8087, () => console.log('Server up'))