const db = require("../config/configDb");
const mongoose = require("mongoose")


let mediacao = new mongoose.Schema({
//dados da mediação 
//esta na pasta de solicitação do postman     
})

let Data_Mediacao = mongoose.model("NOME DA TABELA", mediacao)

module.exports = Data_Mediacao

