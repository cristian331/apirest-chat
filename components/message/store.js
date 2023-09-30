const Model = require('./model');

async function getMessages (filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser) {
            filter = { user: filterUser }
        }
        Model.find(filter)
            .populate('user')
            .exec()
            .then(populated => resolve(populated))
            .catch(err => reject(err))
    })
};

function addMessage (message) {
    const myMessage = new Model(message);
    myMessage.save();
};

async function getMessage (id) {
    return Model.findOne({_id : id})
}

async function updateMessage (id, message) {
    return new Promise((resolve, reject) => {
        getMessage(id)
            .then(origMsj => {
                origMsj.message = message
                resolve(origMsj.save())
            })
            .catch(err => {
                console.log('[UpdateMessage] id not found')
                reject(err)
            })
    })
};

function removeMessage (id) {
    return Model.deleteOne({ 
        _id: id
    })
};

module.exports = {
    get: getMessages,
    getId: getMessage,
    add: addMessage,
    update: updateMessage,
    remove: removeMessage
}


