const authentication = (req, res, next) => {
    const value = req.header('x-api-key')
    if (value == 'Un1v4$.2022') {
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = {
    authentication
}