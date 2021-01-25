require('dotenv').config()
const express = require('express')
const app = express()

const imageRouter = require('./resources/images/image.router')
const profileRouter = require('./resources/profiles/profile.router')
const thingRouter = require('./resources/things/thing.router')

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
// app.use('/things', thingRouter)
app.use('/things', thingRouter)
module.exports = app