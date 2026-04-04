const { weatherApiKey } = require("../config/index");

const BASE = "https://api.openweathermap.org/data/2.5/weather";

async function fetchOpenWeather({ lat, lon, q }) {
    if (!weatherApiKey) {
        throw new Error("Missing WEATHER_API_KEY");
    }
    const url = new URL(BASE);
    url.searchParams.set("appid", weatherApiKey);
    url.searchParams.set("units","metric");
    url.searchParams.set("lang","es");

    if(q){
        url.searchParams.set("q",q);
    }else{
        url.searchParams.set("lat",String(lat));
        url.searchParams.set("lon",String(lon));
    }

    const controller =  new AbortController(); // mecanismo estandar para cancelar una peticion.
    const t = setTimeout(() => controller.abort(), 8000); // Luego de esperar 8 segundos evitamos que se quede colgada y rechace la promesa.

    const response = await fetch(url, {signal: controller.signal}); // signal conecta el control con el fetch (sino nunca se entera que se cancelo).
    clearTimeout(t);

    if(!response.ok){
        throw new Error(`OpenWeather status ${response.status}`);
    }

    const raw = await response.json();

    //Normalizas: solo lo que el front necesita
    return {
        city:raw.name,
        country: raw.sys?.country,
        tempC: raw.main?.temp,
        feelsLikeC: raw.main?.feels_like,
        description: raw.weather?.[0]?.description,
        icon: raw.weather?.[0]?.icon,
    };
}

module.exports = { fetchOpenWeather };