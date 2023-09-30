const express = require('express');     //importar libreria Express
const controller = require('./controller');
const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
    // const filterByUser = req.query.user || null;
    // const filterByChat = req.query.Chat || null;
    let filterBy = null
    let filterId = null
    if (req.query.user) {
        filterBy = 'user',
        filterId= req.query.user
    } else if (req.query.chat) {
        filterBy = 'chat',
        filterId= req.query.chat
    }
    controller.getMessages(filterBy, filterId)
    .then((list) => {
        response.success(req, res, list, 200)
    })
    .catch(e => {
        console.log(e);
        response.error(req, res, 'Solicitud invalidad', 400)
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id || null;
    controller.getMessageById(id)
    .then((message) => {
        response.success(req, res, message, 200)
    })
    .catch(e => {
        console.log(e);
        response.error(req, res, 'Internal Error', 500, e.message)
    })
});

router.post('/', (req, res) => {
    controller.addMessage(req.body.chat, req.body.user, req.body.message)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201)
    })
    .catch(e => {
        response.error(req, res, 'Internal Error', 500, e.message)
    })
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const text = req.body.message;
    controller.updateMessage(id, text)
    .then(data => {
        response.success(req, res, data, 200)
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e.message)
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    controller.deleteMessage(id)
    .then(() => {
        response.success(req, res, `message ${id}: deleted`, 200)
    })
    .catch( e => {
        response.error(req, res, 'Internal Error', 500, e)
    });
});

module.exports = router