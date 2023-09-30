const db = require('../../lib/mongoose');
const Model = require('./model');

async function getMessages (filterUser) {
    let filter = {};
    if (filterUser) {
        filter = { user: filterUser }
    }
    const messages = await Model.find(filter);
    return messages;
};

function addMessage (message) {
    const myMessage = new Model(message);
    myMessage.save();
};

async function updateMessage (id, message) {
    try {
        const foundMessage = await Model.findById(id);
        foundMessage.message = message;
        const updateMessage = await foundMessage.save();
        return updateMessage;
    } catch (error) {
        console.log('error mensaje no actulizado');
        return new Error(error)
    }
};

function removeMessage (id) {
    return Model.deleteOne({ 
        _id: id
    })
}
module.exports = {
    get: getMessages,
    add: addMessage,
    update: updateMessage,
    remove: removeMessage
}


