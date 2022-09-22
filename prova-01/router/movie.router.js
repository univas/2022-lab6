const express = require('express')
const router = express.Router()
const controller = require('../controller/movie.controller')

router.get('/', controller.getAll)
router.get('/:id', controller.getMovieById)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router