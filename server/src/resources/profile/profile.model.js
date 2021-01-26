const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        created: { 
            type: Date, 
            default: Date.now 
        },
        type: {
            type: String,
            enum : ['user','admin'],
            default: 'user'
        },
        featured: {
            type: Boolean
        },
        username: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        url: {
            type: String
        }, 
        country: {
            type: String
        },
        currency: {
            type: String
        },
        is_active: {
            type: Boolean
        },
        is_promoted: {
            type: Boolean
        },
        promoted_tag: {
            type: Boolean
        },
        is_highlight: {
            type: Boolean
        },
        is_highlight_mix: {
            type: Boolean
        },
        website: {
            type: String
        },
        official_email: {
            type: String
        },
        title_tags:  Array,
        albums: Array
    }
)

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile