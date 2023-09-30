const express = require('express');     //importar libreria Express
const routerMessage = require('../components/message/network');
const routerUser = require('../components/user/network');
const routerChat = require('../components/chat/network');


function router (server) {
    server.use('/message', routerMessage);
    server.use('/user', routerUser);
    server.use('/chat', routerChat);
}

module.exports = router
