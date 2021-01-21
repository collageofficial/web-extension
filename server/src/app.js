require('dotenv').config()
const express = require('express')
const app = express()

const imageRouter = require('./resources/images/image.router')
const profileRouter = require('./resources/profiles/profile.router')

app.use(express.json())

app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.json({ message: 'Service is running!'})
        return
    }
    next()
})

app.use('/image', imageRouter)
app.use('/profile', profileRouter)

module.exports = app