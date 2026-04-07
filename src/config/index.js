const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const corsOrigins = (process.env.CORS_ORIGINS || "")
   .split(",")
   .map((origin) => origin.trim())
   .filter(Boolean)


const port = Number(process.env.PORT) || 3000;
const nodeEnv = process.env.NODE_ENV || "development";
const weatherApiKey = process.env.WEATHER_API_KEY;

function assertRequiredEnv(){
   const required = ["WEATHER_API_KEY"];
   const missing = required.filter((key) => !process.env[key]);
   if(missing.length){
      console.error("[config] Missing:", missing.join(", "));
      process.exit(1);
   }
}

module.exports = { assertRequiredEnv, port, nodeEnv, weatherApiKey , corsOrigins };
