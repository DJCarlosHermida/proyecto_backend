import express from 'express'
import config from './config.js'
import './DAL/mongoDB/dbConfig.js'
import businessRouter from './routes/business.router.js'
import usersRouter from './routes/users.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/business', businessRouter)
app.use('/users', usersRouter)
app.use('/users', usersRouter )

const PORT = config.port
app.listen(PORT, ()=> {
    console.log(`Listening to the PORT ${PORT}`)
})