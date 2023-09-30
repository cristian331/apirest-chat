const store = require('./store');

function listChats (userId) {

    return store.get(userId)

};

function addChat (users) {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    };

    const chat = {
        users
    }

    return store.add(chat)

};

module.exports = {
    listChats,
    addChat
}