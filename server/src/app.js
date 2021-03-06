require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./resources/user/user.router')
const authRouter = require('./resources/user/auth.router')
const profileRouter = require('./resources/profile/profile.router')
const albumRouter = require('./resources/album/album.router')
const imageRouter = require('./resources/images/image.router')
const puppeteerRouter = require('./resources/puppeteer')

app.use(express.json())

app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.json({ message: 'Service is running!'})
        return
    }
    next()
})

app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use('/profiles', [profileRouter, albumRouter, imageRouter])
app.use('/puppeteer', puppeteerRouter)

module.exports = app