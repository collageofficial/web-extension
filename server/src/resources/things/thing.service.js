const thingRepo = require('./thing.db.repository')

const getAll = () => thingRepo.getAll()
const getThingById = id => thingRepo.getThingById(id)
const createThing = data => thingRepo.createThing(data)

module.exports = {
    getAll,
    getThingById,
    createThing
}