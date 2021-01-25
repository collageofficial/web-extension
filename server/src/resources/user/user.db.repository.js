const User = require('./user.model')

const getAll = async () => User.find({})

const getUserById = async id => (await User.findOne({ _id: id }))

const createUser = async user => User.create(user)

module.exports = {
    getAll,
    createUser,
    getUserById
}