const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

const Profile = require('./profile.model')
const User = require('../user/user.model')

//Private profile/id

router.get('/me', auth, async (req, res) => {
    try{
        const profile = await Profile.findOne({ user: req.user.id })
        .populate('user', ['name'])

        if(!profile) {
            res.status(400).json({ msg: 'There is no profile for this user'})
        }

        res.json(profile)
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

//GET all profiles
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('User', ['name'])
        res.json(profiles)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router