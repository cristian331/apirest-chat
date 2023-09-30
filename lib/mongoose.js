const db = require('mongoose');
const { config } = require('../config/config');

db.Promise = global.Promise;

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const HOST = encodeURIComponent(config.dbHost);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}`;

async function conect(url) {
    await db.connect(url, {useNewUrlParser:true});
    console.log('[DB]: succesfuly conection')
}

module.exports = {MONGO_URI, conect};