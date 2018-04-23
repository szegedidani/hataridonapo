const mongoose = require('mongoose')

const DateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})

// Methods
DateSchema.method({})

// Static Methods
DateSchema.static({})

module.exports = mongoose.model('Dates', DateSchema)