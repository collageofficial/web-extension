const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Album = require('./album.model')
const Profile = require('../profile/profile.model')


// Public
// GET /profile/albums
// gets all exist albums

router.get('/albums',async (req, res) => {
    try {
        const albums = await Album.find()
        res.status(200).json(albums)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// Private
// GET /profiles/my_albums
// gets all user albums

router.get('/my_albums', auth, async (req, res) => {
    try {
        const albums = await Album.find({ author: req.user.id }).populate('User')
        res.status(200).json(albums)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// Public
// GET /profiles/albums/:album_id
// gets album by album id

router.get('/albums/:album_id', async (req, res) => {
    try {
        const album = await Album.findById({
            _id: req.params.album_id,
        })
        if (!album) {
            res.status(400).json({ msg: 'There is no album for this profile' })
        }
        res.json(album)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// Private
// POST
// create album

router.post(
    '/albums',
    [
        auth,
        check('album_name', 'Album name is required').not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            const album = await Album.create({
                author: req.user.id,
                ...req.body
            })

            const profile = await Profile.findOne({
                user: req.user.id
            })

            profile['albums'].push(album)

            await profile.save()

            res.status(200).json(album)
        } catch (err) {
            console.error(err.message)
            return res.status(500).send('Server Error')
        }
    }
)

module.exports = router
