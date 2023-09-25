import { usersModel } from '../../mongoDB/models/users.model.js'

export default class UsersModel {
    async findAll() {
        try {
            const response = await usersModel.find()            
            return response
        } catch (error) {
            return error
        }
    }

    async findOneById(id) {
        try {
            const response = await usersModel.findById(id)
            return response 
        } catch (error) {
            return error
        }
    } 

    async createOne(obj) {
        try {
            const response = await usersModel.create(obj)
            return response
        } catch (error) {
            return error
        }
    }

    async deleteOne(id) {
        try {
            const response = await usersModel.deleteOne({_id: id})
            return response
        } catch (error) {
            return error
        }
    }
}           