const express = require('express')
const router = express.Router()
const controller = require('../controller/product.controller')

router.get('/', controller.getAll)
router.post('/', controller.create)
router.get('/:id', controller.getProductById)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router