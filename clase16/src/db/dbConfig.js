import mongoose, { Error, connect, mongo } from 'mongoose'

const URI = 'mongodb+srv://djcarloshermida:djmongodb@djcarloshermida.iiimagn.mongodb.net/mongoose1DB?retryWrites=true&w=majority'

mongoose
.connect(URI)
.then(() => console.log('Connected to the database'))
.catch((error => console.log(error)))