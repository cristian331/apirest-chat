const express = require('express');     //importar libreria Express
const routerMessage = require('../components/message/network');
const routerUser = require('../components/user/network');


function router (server) {
    server.use('/message', routerMessage);
    server.use('/user', routerUser)
}

module.exports = router
