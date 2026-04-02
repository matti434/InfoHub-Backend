const express = require("express"); //importamos el modulo de express (framework)
const app = express(); //Express() devuelve un objeto aplicacion (la "Application de Express"). Ese objeto es app.No son “varias instancias” dentro de app; son funciones/métodos del mismo objeto app.


// Middlewares
app.use(express.json());// app.use metodo de app. Esta diciendo: "Usa este middleware que parsea JSON y rellena req.body".

//Rutas. Fragmento define una ruta HTTP GET en la raiz del servidor
app.get("/", (req, res) => {
    res.json({ message: "API funcionando 🚀" });
});


module.exports = app; // Exportamos el objeto app