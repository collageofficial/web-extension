const router = require('express').Router()
const mongoose = require('mongoose')

const Album = require('./album.model')

router.route('/:profileId/').get(async (req, res) => {
    console.log(req.params, 'OOOOOOOOOOO')
    const albums = await Album.getAll(req.params.profileId).populate('album')
    if (!albums) {
        res.status('404')
    }
    res.json(albums)
})

router.route('/:profileId/:id').get(async (req, res) => {
    console.log(req.params.profileId, 'IIIIIIIIIIIIIII')
    const album = await Album.getalbumById(req.params.profileId, req.params.id)
    if (!album) {
        res.status('404')
    }
    res.json(album)
})

router.route('/').post(async (req, res) => {
    const album = await Album.createalbum(
        new album({
            profileId: mongoose.SchemaTypes.ObjectId,
            image: mongoose.SchemaTypes.ObjectId,
            origin: req.body.origin,
            type: req.body.type,
            url: req.body.url,
            is_active: req.body.is_active,
            is_highlight: req.body.is_highlight,
            is_highlight_mix: req.body.is_highlight_mix,
            tags: req.body.tags,
        }),
        req.params.profileId
    )
    console.log(req.params.profileId)
    res.json(album)
})

module.exports = router
