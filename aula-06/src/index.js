const express = require('express')

const app = express()
app.use(express.json())

const myDatabase = []

app.get('/', (req, res) => {
    res.send(myDatabase)
})

app.get('/:cpf', (req, res) => {
    const student = myDatabase.find(stu => stu.cpf === req.params.cpf)
    res.send(student)
})

app.post('/', (req, res) => {
    myDatabase.push(req.body)
    res.send('Student created successfully!')
})

app.put('/:cpf', (req, res) => {
    const studentIndex = myDatabase.findIndex(stu => stu.cpf === req.params.cpf)
    myDatabase[studentIndex] = req.body
    res.send('Student updated successfully!')
})

app.delete('/:cpf', (req, res) => {
    const studentIndex = myDatabase.findIndex(stu => stu.cpf === req.params.cpf)
    myDatabase.splice(studentIndex, 1)
    res.send('Student deleted successfully!')
})

app.listen(8087, () => console.log('Server up on port 8087!'))
