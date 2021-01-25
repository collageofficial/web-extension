const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const UserSchema = new mongoose.Schema({
    // id: { 
    //     type: String, 
    //     default: uuidv4()
    //  },
    name: {
      type: String,
      required: true
    },
    username: {
        type: String,
        required: true
      },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    profile: Object,
    created: {
      type: Date,
      default: Date.now
    }
  })
  
  module.exports = mongoose.model('user', UserSchema)