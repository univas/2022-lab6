const { produto } = require('../model/index')

const create = async data => {
    await produto.create(data)
}

const getAll = async () => {
    return await produto.findAll()
}

const getProductById = async productId => {
    return await produto.findAll({
        where: {
            id: productId
        }
    })
}

const update = async (productId, data) => {
    return await produto.update(data, {
        where: {
            id: productId
        }
    })
}

const remove = async productId => {
    return await produto.destroy({
        where: {
            id: productId
        }
    })
}

module.exports = {
    create,
    getAll,
    getProductById,
    update,
    remove
}