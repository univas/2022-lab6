const myDatabase = []

const create = subject => {
    myDatabase.push(subject)
}

const getAll = () => myDatabase

const getById = subjectId => myDatabase.find(sub => sub.id == subjectId)

const update = (subjectId, subject) => {
    const index = myDatabase.findIndex(sub => sub.id == subjectId)
    myDatabase[index] = subject
}

const remove = subjectId => {
    const index = myDatabase.findIndex(sub => sub.id == subjectId)
    myDatabase.splice(index, 1)
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}

