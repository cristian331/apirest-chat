const express = require('express');

const controller = require('./controller');
const response = require('../../network/response');

const router = express.Router();


router.get('/:userId', (req, res) => {
    const userId = req.params.userId; // usuario del cual se buscaran sus chats
    controller.listChats(userId)
        .then(data =>
            response.success(req, res, data, 201)
        )
        .catch(err =>
            response.error(req, res, 'Internal Error', 500, err)
        )
    }
);

router.post('/', (req, res) => {
    const users = req.body.users; // Lista de intregrantes del chat
    controller.addChat(users)
        .then(data =>
            response.success(req, res, data, 201)
        )
        .catch(err =>
            response.error(req, res, 'Internal Error', 500, err)
        )
    }
);

module.exports = router