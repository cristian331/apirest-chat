const Model = require('./model');

function addUser (user) {
    const myUser = new Model(user);
    return myUser.save()
}


module.exports = {
    // get: getUsers,
    add: addUser,
    // update: updateUser,
    // remove: removeUser
}
