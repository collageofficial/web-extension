const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
    {
        id: { type: String, default: uuidv4() },
        created: { type: Date, default: Date.now },
        type: {
            type: String,
            enum : ['user','admin'],
            default: 'user'
        },
        approved: Boolean,
        applied: Boolean,
        commission: {
            type: String,
            enum : ['user','admin'],
            default: 'user'
        },
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
        badge: {
            type: String,
            enum : ['user','admin'],
            default: 'user'
        },
        title_tags:  [],
        image: mongoose.SchemaTypes.ObjectId
    },
    { timestamps: true }
)

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile