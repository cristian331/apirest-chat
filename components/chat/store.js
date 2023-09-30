const Model = require('./model');

function addChat (chat) {
    const myChat = new Model(chat);
    return myChat.save();

};

function getChats (userId) {
    return new Promise((resolve, reject) => {
        let filter
        if(userId) {
            filter = {
                users: userId
            }
        };

        Model.find(filter)
            .populate('users')
            .exec()
            .then(populated => resolve(populated))
            .catch(err => reject(err))
    })
};


module.exports = {
    get: getChats,
    add: addChat,
}