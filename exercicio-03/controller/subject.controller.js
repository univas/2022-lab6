const service = require('../service/subject.service')

const create = (req, res) => {
    const subject = req.body
    if (isValidBody(res, subject)) {
        service.create(subject)
        res.status(201).send('Subject created successfully')
    }
}

const getAll = (req, res) => {
    res.status(200).send(service.getAll())
}

const getById = (req, res) => {
    const subject = service.getById(req.params.id)
    if (subject) {
        res.status(200).send(subject)
    } else {
        res.status(404).send('Subject not found')
    }
}

const update = (req, res) => {
    const subject = service.getById(req.params.id)
    if (subject) {
        if (isValidBody(res, subject)) {
            service.update(req.params.id, req.body)
            res.status(200).send('Subject updated successfully')
        }
    } else {
        res.status(404).send('Subject not found')
    }
}

const remove = (req, res) => {
    const subject = service.getById(req.params.id)
    if (subject) {
        service.remove(req.params.id)
        res.status(200).send('Subject removed successfully')
    } else {
        res.status(404).send('Subject not found')
    }
}

const isValidBody = (res, subject) => {
    if (!subject.id) {
        res.status(400).send('Id is mandatory')
        return false
    
    } else if (!subject.name || subject.name.trim() === '') {
        res.status(400).send('Name is mandatory')
        return false
    
    } else if (!subject.workload) {
        res.status(400).send('Workload is mandatory')
        return false
    
    } else if (!subject.teacherName || subject.teacherName.trim() === '') {
        res.status(400).send('TeacherName is mandatory')
        return false
    }

    return true
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}
