const { port } = require("./src/config");
const app = require("./src/app");

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});