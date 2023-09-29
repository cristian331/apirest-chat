const express = require('express');     //importar libreria Express
const controller = require('./controller');
const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
    controller.getmessages()
    .then((list) => {
        response.success(req, res, list, 201)
    })
    .catch(e => {
        console.log(e);
        response.error(req, res, 'Solicitud invalidad', 400)
    })
});


router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201)
    })
    .catch(e => {
        response.error(req, res, 'Solicitud invalidad', 400)
    })
});

module.exports = router