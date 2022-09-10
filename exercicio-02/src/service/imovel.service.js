const myDatabase = []

const getAll = () => myDatabase

const create = imovel => {
    myDatabase.push(imovel)
}

const update = (imovelId, imovel) => {
    const index = myDatabase.findIndex(imo => imo.id == imovelId)
    myDatabase[index] = imovel
}

const remove = imovelId => {
    const index = myDatabase.findIndex(imo => imo.id == imovelId)
    myDatabase.splice(index, 1)
}

module.exports = {
    getAll,
    create,
    update,
    remove
}
