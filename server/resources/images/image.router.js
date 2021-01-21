const router = require('express').Router()
const imageService = require('./image.service')
const Img = require('./image.model')

router.route('/').get(async (req, res) => {
    const images = await imageService.getAll()
    if (!images) {
        res.status('404')
    }
    res.json(images)
})

router.route('/:id').get(async (req, res) => {
    const img = await imageService.getImageById(req.params.id)
    if (!img) {
        res.status('404')
    }
    res.json(img)
})

router.route('/').post(async (req, res) => {
    const img = await imageService.createImage(
        new Img({
            filename: req.body.filename,
            ratio: req.body.ratio,
            size: { width: req.body.width, height: req.body.height },
            caption: req.body.caption,
            origin: req.body.origin,
            is_active: req.body.is_active
        })
    )
    res.json(img)
})

router.route('/:id').put(async (req, res) => {
    const newImg = imageService.updateImage(req.params.id, req.body)
    res.json(newImg)
})

// router.route('/:id').delete(async (req, res) => {
//     await imageService.deleteImage(req.params.id)
//     res.status('204').send('The image has been deleted')
// })

module.exports = router