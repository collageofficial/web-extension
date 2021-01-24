const Image = require('./image.model')

const getAll = async () => Image.find({})

const getImageById = async id => Image.findOne({ _id: id })

const createImage = async img => Image.create(img)

module.exports = {
  getAll,
  getImageById,
  createImage
}