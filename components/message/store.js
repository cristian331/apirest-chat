const db = require('../../lib/mongoose');
const Model = require('./model');



function addMessage (message) {
    const myMessage = new Model(message);
    myMessage.save();

};

async function getMessages () {
    const messages = await Model.find();
    return messages;
};

module.exports = {
    add: addMessage,
    get: getMessages
}


