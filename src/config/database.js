const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://localhost:27017/Demo_Mongo_dev')
    console.log('MongoDb Connected');
}

module.exports = connect;