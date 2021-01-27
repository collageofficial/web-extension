const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        file_name: {
            type: String,
            required: true,
        },
        src: {
            type: String,
            required: true,
        },
        ratio: {
            type: Number,
            required: true,
        },
        size: {
            width: {
                type: Number,
                required: true,
            },
            height: {
                type: Number,
                required: true,
            },
        },
        caption: {
            type: String,
            required: true,
        },
        origin: {
            type: String,
            required: true,
        },
        created: { type: Date, default: Date.now },
    },
    { timestamps: true }
)

const Image = mongoose.model('Image', imageSchema)

module.exports = Image
