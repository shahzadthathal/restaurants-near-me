const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Restaurant = new Schema({

    name: { type: String, required: true },
    lat: { type: Number, required: true },
    long: { type: Number, required: true },

},{ timestamps: true })

module.exports = mongoose.model('restaurant', Restaurant)
