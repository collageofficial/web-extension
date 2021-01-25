const userRepo = require('./user.db.repository')

const getAll = () => userRepo.getAll()
const getUserById = id => userRepo.getUserById(id)
const createUser = data => userRepo.createUser(data)

module.exports = {
    getAll,
    getUserById,
    createUser
}