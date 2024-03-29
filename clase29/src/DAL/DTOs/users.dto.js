export default class UsersDTO {
    constructor (user) {
        this.name = name = `${user.first_name} ${user.last_name}`
        this.email = user.email,
        this.password = user.password
        this.role = user.role || 'Public'
        this.orders = []
    }
}