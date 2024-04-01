const bodyParser = require('body-parser');
const express = require('express');

//verificação se esta conectado
db.on("error", console.log.bind(console, "erro de conexão "));
db.once("open", () => {
  console.log("conexão bem-sucedida");
});

const app = express();
app.use(bodyParser.json());

module.exports = app;
