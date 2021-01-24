const profileRepo = require('./profile.db.repository')

const getAll = () => profileRepo.getAll()
const getProfileById = id => profileRepo.getPrifileById(id)
const createProfile = data => profileRepo.createProfile(data)

module.exports = {
    getAll,
    getProfileById,
    createProfile
}