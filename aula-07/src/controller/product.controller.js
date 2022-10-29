const service = require('../service/product.service')

const create = async (req, res) => {
    await service.create(req.body)
    res.status(201).send('Product created successfully!')
}

const getAll = async (req, res) => {
    const response = await service.getAll()
    res.send(response)
}

const getProductById = async (req, res) => {
    const productId = parseInt(req.params.id, 10)
    res.send(await service.getProductById(productId))
}

const update = async (req, res) => {
    const productId = req.params.id
    await service.update(productId, req.body)
    res.status(200).send('Product updated successfully!')
}

const remove = async (req, res) => {
    const productId = req.params.id
    await service.remove(productId)
    res.status(204).send('')
}

module.exports = {
    create,
    getAll,
    getProductById,
    update,
    remove
}
