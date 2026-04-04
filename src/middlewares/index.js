const express = require("express");

function registerMiddlewares(app) {
    
    app.use(express.json());// app.use metodo de app. Esta diciendo: "Usa este middleware que parsea JSON y rellena req.body".

}

module.exports = { registerMiddlewares };