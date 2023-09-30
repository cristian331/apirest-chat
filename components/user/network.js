const express = require('express');     //importar libreria Express
const controller = require('./controller');
const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
    controller.getUsers()
        .then(data => 
            response.success(req, res, data, 200)
        )
        .catch(err =>
            response.error(req, res, 'internal Error', 500, err)
        );
    }
);

router.post('/', (req, res) => {
    const name = req.body.name;

    controller.addUser(name)
        .then(data => 
            response.success(req, res, data, 201)
        )
        .catch(err =>
            response.error(req, res, 'Internal Error', 500, err)
        );
    }
);


module.exports = router;