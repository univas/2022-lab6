const service = require('../service/customer.service')

const create = async (req, res) => {
    await service.create(req.body)
    res.status(201).send('Customer created successfully!')
}

const getAll = async (req, res) => {
    const response = await service.getAll()
    res.send(response)
}

const getCustomerById = async (req, res) => {
    const customerId = parseInt(req.params.id, 10)
    res.send(await service.getCustomerById(customerId))
}

const update = async (req, res) => {
    const customerId = req.params.id
    await service.update(customerId, req.body)
    res.status(200).send('Customer updated successfully!')
}

const remove = async (req, res) => {
    const customerId = req.params.id
    await service.remove(customerId)
    res.status(204).send('')
}

module.exports = {
    create,
    getAll,
    getCustomerById,
    update,
    remove
}
