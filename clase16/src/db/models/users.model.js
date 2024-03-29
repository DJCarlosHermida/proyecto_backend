import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    gender: {
        type: String,
    },
})

usersSchema.plugin(mongoosePaginate)

export const usersModel = mongoose.model('Users', usersSchema)