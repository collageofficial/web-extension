const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Album = require('./album.model')



//GET /profile/albums
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

//GET /profile/my_albums
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

router.get('/album', auth, async (req, res) => {
    try {
        const album = await Album.findOne({
            author: req.user.id,
        }).populate('User')

        if (!album) {
            res.status(400).json({ msg: 'There is no album for this profile' })
        }

        res.json(album)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})



// router.route('/:profileId/:id').get(async (req, res) => {
//     console.log(req.params.profileId, 'IIIIIIIIIIIIIII')
//     const album = await Album.getalbumById(req.params.profileId, req.params.id)
//     if (!album) {
//         res.status('404')
//     }
//     res.json(album)
// })

router.post(
    '/albums',
    [
        auth,
        check('album_name', 'Album name is required').not().isEmpty(),
    ],
    async (req, res) => {
        console.log(req.params, req.body)
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const profileFields = {
            author: req.user.id,
            ...req.body,
        }
        try {
            // Using upsert option (creates new doc if no match is found):
            const album = await Album.create({
                author: req.user.id,
                ...req.body
            })

            // await album.save()

            res.status(200).json(album)
        } catch (err) {
            console.error(err.message)
            return res.status(500).send('Server Error')
        }
    }
)

module.exports = router
