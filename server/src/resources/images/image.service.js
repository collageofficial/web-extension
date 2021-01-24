const imagesRepo = require('./image.db.repository')

const getAll = () => imagesRepo.getAll()
const createImage = data => imagesRepo.createImage(data)
const getImageById = id => imagesRepo.getImageById(id)

module.exports = {
  getAll,
  createImage,
  getImageById
}