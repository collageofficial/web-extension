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

//GET /profile 
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
// POST /profile
// Creates or updates profile

router.post(
    '/',
    [
        auth,
        check('username', 'Username is required').not().isEmpty(),
        check('description', 'Description is required').isLength({
            min: 4,
        }),
    ],
    async (req, res) => {
        console.log(req.params, req.body)
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const profileFields = {
            user: req.user.id,
            name: req.user.name,
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

// GET /profile/user/:user_id
// gets profile based on user id
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
