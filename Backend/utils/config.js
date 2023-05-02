const Restaurant = require('../Models/restaurant');

require('dotenv').config();

const mongo = {
    username : process.env.MONGO_USERNAME,
    password : process.env.MONGO_PASSWORD,
    dbName : process.env.MONGO_DB_NAME,
    host : process.env.MONGO_HOST
}
module.exports = {
    PORT : process.env.PORT || 8000,
    DB_URL : `mongodb+srv://${mongo.username}:${mongo.password}@${mongo.host}/${mongo.dbName}`
}