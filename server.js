const express = require('express');     //importar libreria Express
const bodyParser = require('body-parser');    //importar libreria body-parse para obtener datos del request

const router = require('./network/routes');


const app = express();     // inicializar la libreria 
const port = 3000;

app.use(bodyParser.json());

router(app);


app.listen(port);   // indicar por cual puerto escuchara app 
console.log('port 3000 is listening')