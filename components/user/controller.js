const store = require('./store');

function addUser (name) {
    if (!name) {
        console.log('[userController]: no name')
        return Promise.reject('Invalid data')
    };

    const user = {
        name
    };

    return store.add(user);  // devuelvo la promesa que viene de la solicitud .save()
};

function getUsers () {
    return store.get();
}

module.exports = {
    addUser, 
    getUsers,
    // updateUser,
    // deleteUser
}