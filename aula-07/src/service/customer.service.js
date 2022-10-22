const { customer } = require('../model/index')

const create = async data => {
    await customer.create(data)
}

const getAll = async () => {
    return await customer.findAll()
}

const getCustomerById = async customerId => {
    return await customer.findAll({
        where: {
            id: customerId
        }
    })
}

const update = async (customerId, data) => {
    return await customer.update(data, {
        where: {
            id: customerId
        }
    })
}

const remove = async customerId => {
    return await customer.destroy({
        where: {
            id: customerId
        }
    })
}

module.exports = {
    create,
    getAll,
    getCustomerById,
    update,
    remove
}