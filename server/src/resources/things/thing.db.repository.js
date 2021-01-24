const Thing = require('./thing.model')

const getAll = async profileId => Thing.find({profileId})

const getByProfileIDandID = async (profileId, id) => await Thing.findOne({ profileId, _id: id,  })

const createThing = async (thing, profileId) => Thing.create({...thing, profileId})

module.exports = {
    getAll,
    createThing,
    getByProfileIDandID
}