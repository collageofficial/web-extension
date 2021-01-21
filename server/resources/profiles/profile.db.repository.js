const Profile = require('./profile.model')

const getAll = async () => Profile.find({})

const createProfile = async profile => Image.create(profile)

module.exports = {
    getAll,
    createProfile
}