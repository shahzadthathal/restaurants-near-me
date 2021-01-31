
const Restaurant = require('../models/Restaurant')

getRestaurants = async (req, res) => {
    await Restaurant.find({}, (err, records) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!records.length) {
            return res
                .status(404)
                .json({ success: false, error: `Record not found` })
        }
        return res.status(200).json({ success: true, data: records })
    }).catch(err => console.log(err))
}

createRestaurant = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a valid data',
        })
    }

    const record = new Restaurant(body)

    if (!record) {
        return res.status(400).json({ success: false, error: err })
    }

    record
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'Record created!',
                data:record
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Record not created!',
            })
        })
}

module.exports = {
    getRestaurants,
    createRestaurant
}