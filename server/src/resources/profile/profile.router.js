const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Profile = require('./profile.model')
const User = require('../user/user.model')

//Private
// GET /profile/me  
// gets current users profile based on user_id and token

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id,
        }).populate('User', ['name'])

        if (!profile) {
            res.status(400).json({ msg: 'There is no profile for this user' })
        }

        res.json(profile)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// Public
// GET /profiles 
// gets all exists profiles

router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('User', ['name'])
        res.json(profiles)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// Private
// POST /profiles
// Creates or updates profile

router.post(
    '/',
    [
        auth,
        check('description', 'Description is required').isLength({
            min: 4,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        console.log(req.user)
        const profileFields = {
                user: req.user.id,
                name: req.user.info[0],
                username: req.user.info[1],
            ...req.body,
        }
        try {
            // Using upsert option (creates new doc if no match is found):
            const profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true, upsert: true, setDefaultsOnInsert: true }
            )

            res.status(200).json(profile)
        } catch (err) {
            console.error(err.message)
            return res.status(500).send('Server Error')
        }
    }
)

// Public
// GET /profiles/user/:user_id
// gets profiles based on user id

router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.params.user_id,
        }).populate('User', ['name'])

        if (!profile) {
            return res
                .status(400)
                .json({ msg: 'There is no profile for this user' })
        }
        res.json(profile)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router
