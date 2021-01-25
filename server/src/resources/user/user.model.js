const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        id: { type: String, default: uuidv4() },
        email: String,
        created: { type: Date, default: Date.now },
        albums: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Album' }],
        username: String,
        name: String,
        password: String
    },
    { timestamps: true }
)

userSchema.statics.toResponse = (user) => {
    const {
        email,
        created,
        albums,
        username,
        name,
    } = user
    return {
        id: user._id,
        email,
        created,
        albums,
        username,
        name,
    }
}

userSchema.statics.fromRequest = ({ id, email, created, albums, username, name, password }) => {
    return new User({ id, email, created, albums, username, name, password });
}

const User = mongoose.model('User', userSchema)

module.exports = User