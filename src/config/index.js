const dotenv = require("dotenv");
const path = require("path");

const corsOrigins = (process.env.CORS_ORIGINS || "")
   .split(",")
   .map((origin) => origin.trim())
   .filter(Boolean)

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const port = Number(process.env.PORT) || 3000;
const nodeEnv = process.env.NODE_ENV || "development";
const weatherApiKey = process.env.WEATHER_API_KEY;

module.exports = { port, nodeEnv, weatherApiKey , corsOrigins };
