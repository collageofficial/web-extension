const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema(
    {
        id: { type: String, default: uuidv4() },
        created: { type: Date, default: Date.now },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        album_name: Boolean,
        images: Array,
    },
    { timestamps: true }
)

albumSchema.statics.toResponse = (album) => {
    const {
        created,
        user_id,
        album_name,
        images
    } = album
    return {
        id: album._id,
        created,
        user_id,
        album_name,
        images
    }
}

const album = mongoose.model('album', albumSchema)

module.exports = album
