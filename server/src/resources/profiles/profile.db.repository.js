const Profile = require('./profile.model')

const getAll = async () => Profile.find({})

const getPrifileById = async id => Profile.findOne({ _id: id })

const createProfile = async profile => Image.create(profile)

module.exports = {
    getAll,
    createProfile,
    getPrifileById
}