const service = require('../service/customer.service')

const create = (req, res) => {
    service.create(req.body)
    res.status(201).send('Customer created successfully!')
}

const getAll = async (req, res) => {
    const response = await service.getAll()
    res.send(response)
}

const getCustomerById = (req, res) => {
    const customerId = req.params.id
    res.send(service.getCustomerById(customerId))
}

const update = (req, res) => {
    const customerId = req.params.id
    service.update(customerId, req.body)
    res.status(200).send('Customer updated successfully!')
}

const remove = (req, res) => {
    const customerId = req.params.id
    service.remove(customerId)
    res.status(204).send('Customer removed successfully!')
}

module.exports = {
    create,
    getAll,
    getCustomerById,
    update,
    remove
}
