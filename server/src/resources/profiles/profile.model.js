const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
    {
        id: { type: String, default: uuidv4() },
        created: { type: Date, default: Date.now },
        // type: {
        //     type: String,
        //     enum : ['user','admin'],
        //     default: 'user'
        // },
        approved: Boolean,
        applied: Boolean,
        // commission: {
        //     type: String,
        //     enum : ['user','admin'],
        //     default: 'user'
        // },
        albums: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Thing' }],
        featured: Boolean,
        username: String,
        name: String,
        description: String,
        url: String,
        country: String,
        currency: String,
        devices: [],
        is_active: Boolean,
        is_promoted: Boolean,
        promoted_tag: Boolean,
        is_highlight: Boolean,
        is_highlight_mix: Boolean,
        website: String,
        official_email: String,
        title_tags: [],
        // image: [{
        //     type: mongoose.SchemaTypes.ObjectId,
        //     ref: 'Image'
        // }]
    },
    { timestamps: true }
)

profileSchema.statics.toResponse = (profile) => {
    const {
        created,
        type,
        approved,
        applied,
        commission,
        featured,
        username,
        name,
        description,
        url,
        country,
        currency,
        devices,
        is_active,
        is_promoted,
        promoted_tag,
        is_highlight,
        is_highlight_mix,
        website,
        official_email,
        title_tags,
        //  image
    } = profile
    return {
        id: profile._id,
        created,
        type,
        approved,
        applied,
        commission,
        featured,
        username,
        name,
        description,
        url,
        country,
        currency,
        devices,
        is_active,
        is_promoted,
        promoted_tag,
        is_highlight,
        is_highlight_mix,
        website,
        official_email,
        title_tags,
        // image
    }
}

const Profile = mongoose.model('Profile', profileSchema, 'profile')

module.exports = Profile
