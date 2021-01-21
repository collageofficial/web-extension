const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')

const thingSchema = new mongoose.Schema(
    {
        id: { type: String, default: uuidv4() },
        created: { type: Date, default: Date.now },
        profile: mongoose.SchemaTypes.ObjectId,
        image: mongoose.SchemaTypes.ObjectId,
        origin: String,
        type: String,
        url: String,
        is_active: Boolean,
        is_highlight: Boolean,
        is_highlight_mix: Boolean,
        tags: Array
    },
    { timestamps: true }
)

const Thing = mongoose.model('Thing', thingSchema)

module.exports = Thing