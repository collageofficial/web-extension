require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./resources/user/user.router')
const authRouter = require('./resources/user/auth.router')
const profileRouter = require('./resources/profile/profile.router')
const albumRouter = require('./resources/album/album.router')

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
app.use('/profiles', [profileRouter, albumRouter])

module.exports = app