const service = require('../service/movie.service')

const create = (req, res) => {
    const movie = req.body
    if (isBodyValid(res, movie)) {
        service.create(movie)
        res.status(201).send('Movie created')
    }
}

const isBodyValid = (res, movie) => {
    if (!movie.release_year || !movie.description ||
        !movie.title || !movie.id) {
        res.status(400).send('Invalid data supplied')
        return false
    }
    return true
}

const getAll = (req, res) => {
    res.status(200).send(service.getAll())    
}

const getMovieById = (req, res) => {
    const movie = service.getMovieById(req.params.id)
    if (movie) {
        res.status(200).send(movie)
    } else {
        res.status(404).send('Movie not found')
    }
}

const update = (req, res) => {
    const movieId = req.params.id
    const movie = service.getMovieById(movieId)
    if (movie) {
        if (isBodyValid(res, req.body)) {
            service.update(movieId, req.body)
            res.status(204).send('updated')
        }
    } else {
        res.status(404).send('Movie not found')
    }
}

const remove = (req, res) => {
    const movieId = req.params.id
    const movie = service.getMovieById(movieId)
    if (movie) {
        service.remove(movieId)
        res.status(204).send('deleted')
    } else {
        res.status(404).send('Movie not found')
    }
}

module.exports = {
    create,
    getAll,
    getMovieById,
    update,
    remove
}