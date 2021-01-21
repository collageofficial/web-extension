const Image = require('./image.model')

const getAll = async () => Image.find({})

const getImageById = async id => Image.findOne({ _id: id })

const createImage = async img => Image.create(img)

// const updateImage = async (id, data) => Image.updateOne({ _id: id }, data)

// const deleteImage = async id =>
//   (await Image.deleteOne({ _id: id })).deletedCount

module.exports = {
  getAll,
  getImageById,
  createImage,
//   updateImage,
//   deleteImage
}