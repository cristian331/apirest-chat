const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema =  new Schema({

    name: {
        type: String,
        required: true
    },
    date: Date

});

const Model = mongoose.model('User', mySchema);

module.exports = Model;