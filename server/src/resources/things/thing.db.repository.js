const Thing = require('./thing.model')

const getAll = async () => Thing.find({})

const getThingById = async id => Thing.findOne({ _id: id })

const createThing = async profile => Thing.create(profile)

module.exports = {
    getAll,
    createThing,
    getThingById
}