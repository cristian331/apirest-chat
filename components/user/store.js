const Model = require('./model');

function addUser (user) {
    const myUser = new Model(user);
    return myUser.save()
};

function getUsers () {
    return Model.find()
}


module.exports = {
    get: getUsers,
    add: addUser,
    // update: updateUser,
    // remove: removeUser
}
