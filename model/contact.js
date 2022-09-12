const mongoose = require("mongoose")

const Contact = mongoose.model('contact', {
    name: { type: String },
    phone: { type: String },
    country: { type: String }
})

module.exports = Contact