const { customer } = require('../model/index')

const create = customer => {

}

const getAll = () => {
    customer.findAll()
    return 'hello'
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