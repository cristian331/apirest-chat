const express = require('express');     //importar libreria Express
const routerMessage = require('../components/message/network');

function router (server) {
    server.use('/message', routerMessage);
}

module.exports = router
