import express, { query } from 'express'

const app = express()

app.get('/', (req, res) => {
    console.log(req.query);
    const { limite, orden } = req.query
    console.log(limite, orden);
    res.send ('Welcome from Express')
})

app.get('/products/', (req, res) => {
    console.log(req.params);
    res.send ('List of Products')
})

app.get('/products/:pid', (req, res) => {
    res.send ('List of Users')
})



app.listen(8080, ()=> {
    console.log('Listening to 8080 port Express')
})