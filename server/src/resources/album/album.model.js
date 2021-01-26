const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema(
    {
        profile: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Profile'
        },
        album_name: {
            type: String,
            required: true
        },
        images: Array,
        created: { type: Date, default: Date.now }
    }
)

const album = mongoose.model('Album', albumSchema)

module.exports = album
