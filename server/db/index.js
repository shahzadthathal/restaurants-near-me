const mongoose = require('mongoose')




let dbUrl = process.env.APP_DB || 'mongodb+srv://restaurants-near-me_user:hksY897sl@restaurants-near-me-clu.bczxm.mongodb.net/restaurants_near_me_db_mongo?retryWrites=true&w=majority'

mongoose
.connect(dbUrl, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.catch(e => {
    console.error('Connection error', e.message)
})

const db = mongoose.connection
module.exports = db
