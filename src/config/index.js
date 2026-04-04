const path = require("path");
const dotenv = require("dotenv");

dotenv.config({path: path.resolve(__dirname, "../../.env")});

const port = Number(process.env.PORT) || 3000;
const nodeEnv = process.env.NODE_ENV || "development";

module.exports = { port,nodeEnv };