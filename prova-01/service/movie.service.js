const myDatabase = []

const create = movie => {
    myDatabase.push(movie)
}

const getAll = () => myDatabase

const getMovieById = movieId => myDatabase.find(mov => mov.id == movieId)

const update = (movieId, movie) => {
    const index = myDatabase.findIndex(mov => mov.id == movieId)
    myDatabase[index] = movie
}

const remove = movieId => {
    const index = myDatabase.findIndex(mov => mov.id == movieId)
    myDatabase.splice(index, 1)
}

module.exports = {
    create,
    getAll,
    getMovieById,
    update,
    remove
}