const express = require("express");
//importa as rotas da api 

const routes = (app) =>{
    app.route("/").get((req,res)=>{
        res.status(200).send(" CCEE CRM ")
    });
    app.use(
        express.json(),
        //pegar a rota que foi importada
    )
}

