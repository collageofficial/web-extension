const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
const Img = require('./image.model')
const Album = require('../album/album.model')

// Private
// GET /images
// gets all  

// router.route('/').post(async (req, res) => {
//     const images = await Img.create({

//     })
//     if (!images) {
//         res.status('404')
//     }
//     res.json(images)
// })

router.post(
    '/albums/:album_id/uploadimage',
    [
        auth,
        check('file_name', 'File name is required').not().isEmpty(),
        check('caption', 'Caption field is required').not().isEmpty(),
        check('origin', 'Origin field is required').not().isEmpty(),
        check('src', 'src field is required').not().isEmpty(),
        check('ratio', 'src field is required').isNumeric(),
        check('size', 'src field is required').not().isEmpty()
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
                ...req.body
            })

            const album = await Album.find({
                _id: req.params.album_id
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

// router.route('/:id').get(async (req, res) => {
//     const img = await imageService.getImageById(req.params.id)
//     if (!img) {
//         res.status('404')
//     }
//     res.json(img)
// })

// router.route('/').post(async (req, res) => {
//     const img = await imageService.createImage(
//         new Img({
//             filename: req.body.filename,
//             ratio: req.body.ratio,
//             size: { width: req.body.width, height: req.body.height },
//             caption: req.body.caption,
//             origin: req.body.origin,
//             is_active: req.body.is_active
//         })
//     )
//     res.json(img)
// })

module.exports = router