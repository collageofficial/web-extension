const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const User = require('./User')

//POST /users register
router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, password } = req.body

        try {
            let user = await User.findOne({ email })

            if(user) {
                res.status(400).json({ errors: [ { msg: 'User already exists' }]})
            }

            res.send('User route')

        } catch (err) {
            console.error(err.message)
        }
    }
)

module.exports = router
