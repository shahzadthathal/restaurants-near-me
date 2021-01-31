
const express = require('express')

const RestaurantsCtrl = require('../controllers/restaurants-ctrl')

const router = express.Router()


router.post('/restaurants', RestaurantsCtrl.createRestaurant)
router.get('/restaurants', RestaurantsCtrl.getRestaurants)


module.exports = router
