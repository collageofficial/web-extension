const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Profile = require('./profile.model')
const User = require('../user/user.model')

//Private GET profile/me

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

//GET /profiles all
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('User', ['name'])
        res.json(profiles)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

//POST /profile  create or update Private

router.post(
    '/',
    auth,

    check('username', 'Username is required').not().isEmpty(),
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').isLength({
        min: 4,
    }),
    async (req, res) => {
        console.log(req.params, req.body)
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const profileFields = {
            user: req.user.id,
            ...req.body,
        }
        try {
            // Using upsert option (creates new doc if no match is found):
            let profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true, upsert: true, setDefaultsOnInsert: true }
                
            )
            await profile.save()
            return res.json(profile)
        } catch (err) {
            console.error(err.message)
            return res.status(500).send('Server Error')
        }
    }
)

router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('User', ['name'])
        
        if(!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' })
        }
        res.json(profile)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router
