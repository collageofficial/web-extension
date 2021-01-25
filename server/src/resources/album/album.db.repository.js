const album = require('./album.model')

const getAll = async profileId => album.find({profileId})

const getByProfileIDandID = async (profileId, id) => await album.findOne({ profileId, _id: id,  })

const createalbum = async (album, profileId) => album.create({...album, profileId})

module.exports = {
    getAll,
    createalbum,
    getByProfileIDandID
}