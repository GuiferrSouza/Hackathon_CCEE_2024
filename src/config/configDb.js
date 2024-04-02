const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://HACKATON:HACKATON@ccee.nswo9yo.mongodb.net/?retryWrites=true&w=majority&appName=CCEE")

let db = mongoose.connection;

module.exports = db 