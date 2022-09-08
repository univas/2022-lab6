const express = require('express')

const app = express()
app.use(express.json())

const myDatabase = []

app.get('/imoveis', (req, res) => {
    res.send(myDatabase)
})

app.post('/imoveis', (req, res) => {
    myDatabase.push(req.body)
    res.send('Imovel salvo com sucesso')
})

app.put('/imoveis/:id', (req, res) => {
    const index = myDatabase.findIndex(
        imo => imo.id == req.params.id)
    myDatabase[index] = req.body
    res.send('Imovel atualizado com sucesso')
})

app.delete('/imoveis/:id', (req, res) => {
    const index = myDatabase.findIndex(
        imo => imo.id == req.params.id)
    myDatabase.splice(index, 1)
    res.send('Imovel removido com sucesso')
})

app.listen(8087, () => console.log('Server up on port 8087!'))