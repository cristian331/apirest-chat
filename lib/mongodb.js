const { ObjectId, MongoClient } = require('mongodb');
const { config } = require('../config/config');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const HOST = encodeURIComponent(config.dbHost);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}?retrywrites=true&w=majority`;

class MongoLib {
    constructor () {
        this.client = new MongoClient( MONGO_URI, {useNewUrlParser:true}),
        this.dbName = DB_NAME
    }

    connect() {
        if(!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect ( err => {
                    if(err) {
                        reject(err)
                    }
                    resolve(this.client.db(this.dbName));
                })
            })
        }

        return MongoLib.connection;
    }
};

module.exports = MongoLib;