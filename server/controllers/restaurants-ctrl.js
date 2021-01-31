
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


module.exports = {
    getRestaurants
}