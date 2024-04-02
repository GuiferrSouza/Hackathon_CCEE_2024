const bodyParser = require('body-parser');
const express = require('express');
const db = require('./config/configDb.js');
const routes = require('./router/index.js');

//verificação se esta conectado
db.on("error", console.log.bind(console, "erro de conexão "));
db.once("open", () => { console.log("conexão bem-sucedida") });

const app = express();
app.use(bodyParser.json());
routes(app);

module.exports = app;
