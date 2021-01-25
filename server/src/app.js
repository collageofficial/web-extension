require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./resources/user/user.router')
const authRouter = require('./resources/user/auth')
const profileRouter = require('./resources/profile/profile.router')

const imageRouter = require('./resources/images/image.router')
const albumRouter = require('./resources/album/album.router')

app.use(express.json())

app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.json({ message: 'Service is running!'})
        return
    }
    next()
})

app.use('/users', userRouter)
app.use('/auth', authRouter)
app.use('/profile', profileRouter)

// app.use('/image', imageRouter)
// app.use('/profile', profileRouter)
// // app.use('/albums', albumRouter)
// app.use('/albums', albumRouter)
module.exports = app