const { customer } = require('../model/index')

const create = customer => {

}

const getAll = async () => {
    return await customer.findAll()
}

const getCustomerById = customerId => {

}

const update = (customerId, customer) => {

}

const remove = customerId => {

}

module.exports = {
    create,
    getAll,
    getCustomerById,
    update,
    remove
}