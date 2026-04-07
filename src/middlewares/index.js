const express = require("express");
const cors = require("cors");
const { corsOrigins } = require("../config");

function registerMiddlewares(app) {
    
   const corsOptions = {
     origin(origin,callback){
      //Permite request sin Origin (Postman,Curl,Health checks)

      if(!origin) return callback(null,true);


      if(corsOrigins.includes(origin)){
        return callback(null,true);
      }

      return callback(new Error(`CORS bloqueado para origen: ${origin}`));
    },
    methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders: ["Content-type","Autorization"],
    credentials: false, //true con cookies/sesión
     
   }
    app.use(cors(corsOptions));
    app.use(express.json());// app.use metodo de app. Esta diciendo: "Usa este middleware que parsea JSON y rellena req.body".
   
}

module.exports = { registerMiddlewares };