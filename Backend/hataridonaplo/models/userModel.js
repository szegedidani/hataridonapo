const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

// Methods
UserSchema.method({})

// Static Methods
UserSchema.static({})

module.exports = mongoose.model('User', UserSchema)