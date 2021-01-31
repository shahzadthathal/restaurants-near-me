const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Restaurants = new Schema({

    name: { type: String, required: true },
    lng: { type: Number, required: true },
    lng: { type: Number, required: true },

},{ timestamps: true })

module.exports = mongoose.model('restaurant', Restaurant)
