const thingRepo = require('./thing.db.repository')

const getAll = profileId => thingRepo.getAll(profileId)
const getThingById = (id, profileId) => thingRepo.getByProfileIDandID(id, profileId)
const createThing = (data, profileId) => thingRepo.createThing(data, profileId)

module.exports = {
    getAll,
    getThingById,
    createThing
}