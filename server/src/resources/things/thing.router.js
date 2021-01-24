const router = require('express').Router()
const thingService = require('./thing.service')
const Thing = require('./thing.model')
const mongoose = require('mongoose')

router.route('/').get(async (req, res) => {
    const things = await thingService.getAll()
    if (!things) {
        res.status('404')
    }
    res.json(things)
})

router.route('/:id').get(async (req, res) => {
    const thing = await thingService.getThingById(req.params.id)
    if (!thing) {
        res.status('404')
    }
    res.json(thing)
})

router.route('/').post(async (req, res) => {
    const thing = await thingService.createThing(
        new Thing({
            profile: mongoose.SchemaTypes.ObjectId,
            image: mongoose.SchemaTypes.ObjectId,
            origin: req.body.origin,
            type: req.body.type,
            url: req.body.url,
            is_active: req.body.is_active,
            is_highlight: req.body.is_highlight,
            is_highlight_mix: req.body.is_highlight_mix,
            tags: req.body.tags,
        })
    )
    res.json(thing)
})

module.exports = router
