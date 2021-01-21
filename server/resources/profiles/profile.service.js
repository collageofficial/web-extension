const profileRepo = require('./profile.db.repository')

const getAll = () => profileRepo.getAll()
const createProfile = data => profileRepo.createProfile(data)

module.exports = {
    getAll,
    createProfile
}