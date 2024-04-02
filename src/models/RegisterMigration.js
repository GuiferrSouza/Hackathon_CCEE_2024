const db = require("../config/configDb");
const mongoose = require("mongoose")


let DbMigrationSchema = new mongoose.Schema({
    codigoConectado: { type: Number, required: true },
    codigoPerfil: { type: Number, required: true },
    codigoUnidadeConsumidora: { type: Number, required: true },
    codigoVarejista: { type: Number, required: true },
    dataDenuncia: { type: Date, required: true },
    dataInicioContratacao: { type: Date, required: true },
    tipoConectado: { type: String, enum: ['DISTRIBUIDORA_SUPRIDORA'], required: true },
    tipoDocumento: { type: String, enum: ['CPF'], required: true },
    numeroDocumento: { type: String, required: true },
    linkCCV: { type: String, required: true }
});

let cadastroMigration= mongoose.model("nome do esquema no banco", DbMigration)

module.exports = cadastroMigration 