const router = require('express').Router()
const profileService = require('./profile.service')
const Profile = require('./profile.model')

router.route('/').get(async (req, res) => {
    const profiles = await profileService.getAll()
    if (!profiles) {
        res.status('404')
    }
    res.json(profiles)
})

router.route('/').post(async (req, res) => {
    const profile = await profileService.createProfile(
        new Profile({
            type: {
                type: String,
                enum : ['user','admin'],
                default: 'user'
            },
            approved: req.body.approved,
            applied: req.body.applied,
            commission: {
                type: String,
                enum : ['user','admin'],
                default: 'user'
            },
            featured: req.body.featured,
            username: req.body.username,
            name: req.body.username,
            description: req.body.description,
            url: req.body.url, 
            country: req.body.country,
            currency: req.body.currency,
            devices: [],
            is_active: req.body.is_active,
            is_promoted: req.body.is_promoted,
            promoted_tag: req.body.promoted_tag,
            is_highlight: req.body.is_highlight,
            is_highlight_mix: req.body.is_highlight_mix,
            website: req.body.website,
            official_email: req.body.official_email,
            badge: {
                type: String,
                enum : ['user','admin'],
                default: 'user'
            },
            title_tags:  [],
            image: mongoose.SchemaTypes.ObjectId  //?
        })
    )
    res.json(profile)
})

module.exports = router
