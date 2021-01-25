const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')

const thingSchema = new mongoose.Schema(
    {
        id: { type: String, default: uuidv4() },
        created: { type: Date, default: Date.now },
        profileId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Profile'
        },
        image: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Image'
        },
        origin: String,
        type: String,
        url: String,
        is_active: Boolean,
        is_highlight: Boolean,
        is_highlight_mix: Boolean,
        tags: Array,
    },
    { timestamps: true }
)

thingSchema.statics.toResponse = (thing) => {
    const {
        created,
        profileId,
        image,
        origin,
        type,
        url,
        is_active,
        is_highlight,
        is_highlight_mix,
        tags,
    } = image
    return {
        id: thing._id,
        created,
        profileId,
        image,
        origin,
        type,
        url,
        is_active,
        is_highlight,
        is_highlight_mix,
        tags,
    }
}

const Thing = mongoose.model('Thing', thingSchema)

module.exports = Thing
