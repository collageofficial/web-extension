const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')


const imageSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: uuidv4()
        },
        filename: String,
        ratio: Number,
        size: { width: Number, height: Number },
        caption: String,
        origin: String,
        is_active: Boolean,
        created: { type: Date, default: Date.now },
    },
    { timestamps: true }
)

imageSchema.statics.toResponse = image => {
    const { filename, ratio, size, caption, origin, is_active, created } = image
    return { id: image._id, filename, ratio, size, caption, origin, is_active, created }
}

const Image = mongoose.model('Image', imageSchema)

module.exports = Image

