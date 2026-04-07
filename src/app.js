const express = require("express"); //importamos el modulo de express (framework)
const app = express(); //Express() devuelve un objeto aplicacion (la "Application de Express"). Ese objeto es app.No son “varias instancias” dentro de app; son funciones/métodos del mismo objeto app.
const { registerMiddlewares } = require("./middlewares");
const weatherRouter = require("./routes/weather");

// Middlewares
registerMiddlewares(app);

app.use((err,req,res,next)=> {
    if(err && err.message && err.message.startWith("CORS bloqueado")){
        return res.status(403).json({ error:err.message});
    }
    return next(err);
});
app.use("/api/v1/weather", weatherRouter);

//Rutas. Fragmento define una ruta HTTP GET en la raiz del servidor
app.get("/", (req, res) => {
    res.json({ message: "API funcionando 🚀" });
});


module.exports = app; // Exportamos el objeto app
