const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
const Img = require('./image.model')
const Album = require('../album/album.model')

// Public
// GET /profiles/images
// gets all exists images from all users

router.get('/images', async (req, res) => {
    try {
        const images = await Img.find({})
        res.status(200).json(images)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// Public
// GET /profiles/albums/:album_id/images
// gets all images from exact album that found by id

router.get('/albums/:album_id/images', async (req, res) => {
    try {
        const album = await Album.findById({
            _id: req.params.album_id,
        })
        if (!album) {
            res.status(400).json({ msg: 'User has no albums with this ID' })
        }

        res.json(album.images)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// Private
// POST /profiles/albums/:album_id/uploadimage
// posts image in exact album that foun by id

router.post(
    '/albums/:album_id/uploadimage',
    [
        auth,
        check('file_name', 'File name is required').not().isEmpty(),
        check('caption', 'Caption field is required').not().isEmpty(),
        check('origin', 'Origin field is required').not().isEmpty(),
        check('src', 'src field is required').not().isEmpty(),
        check('ratio', 'src field is required').isNumeric(),
        check('size', 'src field is required').not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            const image = await Img.create({
                author_id: req.user.id,
                author_name: req.user.info[0],
                ...req.body,
            })

            const album = await Album.find({
                _id: req.params.album_id,
            })

            console.log(album[0].images)

            album[0].images.push(image)

            await album[0].save()

            res.status(200).json(image)
        } catch (err) {
            console.error(err.message)
            return res.status(500).send('Server Error')
        }
    }
)

module.exports = router
