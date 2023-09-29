const db = require('mongoose');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const HOST = encodeURIComponent(config.dbHost);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}`;

db.Promise = global.Promise;

db.connect(MONGO_URI, {useNewUrlParser:true});
console.log('[DB]: succesfuly conection');

module.exports = db;