const imagesRepo = require('./image.db.repository')

const getAll = () => imagesRepo.getAll()
const createImage = data => imagesRepo.createImage(data)
const getImageById = id => imagesRepo.getImageById(id)
// const updateImage = (id, data) => {
//   return imagesRepo.updateImage(id, data)
// }
// const deleteImage = async id => {
//   return imagesRepo.deleteImage(id)
// }

module.exports = {
  getAll,
  createImage,
  getImageById,
//   updateImage,
//   deleteImage
}