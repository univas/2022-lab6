const express = require('express')
const customerRouter = require('./router/customer.route')
const productRouter = require('./router/product.route')

const app = express()
app.use(express.json())
app.use('/api/v1/customer', customerRouter)
app.use('/api/v1/product', productRouter)

app.listen(8087, () => console.log('Server up'))