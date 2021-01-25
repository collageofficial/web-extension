const router = require('express').Router()
const userService = require('./user.service')
const User = require('./user.model')

router.route('/').get(async (req, res) => {
    const users = await userService.getAll()
    if (!users) {
        res.status('404')
    }
    res.json(users.map(User.toResponse))
})

router.route('/:id').get(async (req, res) => {
    const user = await (
        await userService.getUserById(req.params.id)
    ).populate('album')
    if (!user) {
        res.status('404')
    }
    res.json(User.toResponse(user))
})

router.route('/').post(async (req, res) => {
    const user = await userService.createUser(req.body)
    res.status(200).json(User.toResponse(user))
})

module.exports = router
