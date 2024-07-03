// Módulos requeridos
const express = require('express');
const http = require('http');
const helmet = require('helmet');
var compression = require('compression');
require('dotenv').config();
const {v4: uuidv4} = require('uuid');

const app = express();
app.use(helmet()); // Ayuda a proteger aplicaciones Express
app.use(compression());

// Servidor HTTP
const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);

// Prueba
app.get('/', function(req, res) {
    res.send("Hola mundo")
});
