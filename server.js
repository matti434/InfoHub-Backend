const { port, assertRequiredEnv } = require("./src/config");
assertRequiredEnv();
const app = require("./src/app");

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

