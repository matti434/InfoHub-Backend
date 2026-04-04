const express = require("express");
const { fetchOpenWeather } = require("../services/fetchOpenWeather");

const router = express.Router();

function sendError(res, status, message) {
    res.status(status).json({ status, message });
}

router.get("/", async (req, res) => {
    const { lat, lon, q } = req.query;

    const hasCoords =
        lat !== undefined &&
        lon !== undefined &&
        !Number.isNaN(Number(lat)) &&
        !Number.isNaN(Number(lon));

    const hasCity = typeof q === "string" && q.trim().length > 0;

    if (!hasCoords && !hasCity) {
        return sendError(
            res,
            400,
            "Enviá lat y lon, o el parámetro q (ciudad)."
        );
    }

    try {
        const data = await fetchOpenWeather({
            lat,
            lon,
            q: hasCity ? q.trim() : undefined,
        });
        return res.json(data);
    } catch (err) {
        if (err.name === "AbortError") {
            return sendError(
                res,
                504,
                "El servicio meteorológico tardó demasiado en responder."
            );
        }
        return sendError(res, 502, "No se pudo obtener el clima.");
    }
});

module.exports = router;
