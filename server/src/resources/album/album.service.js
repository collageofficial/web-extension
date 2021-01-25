const albumRepo = require('./album.db.repository')

const getAll = profileId => albumRepo.getAll(profileId)
const getalbumById = (id, profileId) => albumRepo.getByProfileIDandID(id, profileId)
const createalbum = (data, profileId) => albumRepo.createalbum(data, profileId)

module.exports = {
    getAll,
    getalbumById,
    createalbum
}