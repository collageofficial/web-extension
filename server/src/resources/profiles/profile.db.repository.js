const Profile = require('./profile.model')

const getAll = async () => Profile.find({})

const getPrifileById = async id => (await Profile.findOne({ _id: id }))

const createProfile = async profile => Profile.create(profile)

module.exports = {
    getAll,
    createProfile,
    getPrifileById
}