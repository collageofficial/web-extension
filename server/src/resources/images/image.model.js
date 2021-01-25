const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')


const imageSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: uuidv4()
        },
        album_id: String,
        file_name: String,
        ratio: Number,
        size: { width: Number, height: Number },
        caption: String,
        origin: String,
        created: { type: Date, default: Date.now },
    },
    { timestamps: true }
)

imageSchema.statics.toResponse = image => {
    const { album_id, file_name, ratio, size, caption, origin, created } = image
    return { id: image._id, album_id, file_name, ratio, size, caption, origin, created }
}

const Image = mongoose.model('Image', imageSchema)

module.exports = Image

