# InfoHub Backend

API Express (Node). Base sin lógica de negocio; punto de entrada en la raíz, código de aplicación en `src/`.

## Requisitos

- **Node.js 20+** (LTS recomendado; ver `engines` en `package.json`).

## Variables de entorno

1. Copia `.env.example` a `.env`.
2. Ajusta `PORT`, `NODE_ENV` y **`WEATHER_API_KEY`** (clave de [OpenWeatherMap](https://openweathermap.org/api); solo en el servidor, nunca en el frontend).
3. No subas `.env` al repositorio (está en `.gitignore`).

## Scripts (`package.json`)

| Script | Comando | Descripción |
|--------|---------|-------------|
| **`npm run dev`** | `nodemon server.js` | Desarrollo con recarga automática al cambiar archivos. |
| **`npm start`** | `node server.js` | Arranque para producción (sin recarga). |

El **punto de entrada** del proceso es **`server.js`** (escucha HTTP). La instancia Express se define en **`src/app.js`**.

## Estructura

| Ruta | Uso |
|------|-----|
| `server.js` | Arranque: `listen` y puerto desde config. |
| `src/app.js` | Creación de la app Express y rutas base. |
| `src/config/` | Carga de `.env` y configuración (p. ej. puerto). |
| `src/middlewares/` | Middlewares globales (`express.json()`, etc.). |
| `src/routes/` | Routers HTTP (p. ej. clima). |
| `src/services/` | Integraciones externas (p. ej. OpenWeather). |

## API — clima (BFF)

**`GET /api/v1/weather`**

- **Query (una de dos opciones):**
  - `lat` y `lon`: coordenadas numéricas (ej. `lat=-34.6&lon=-58.4`).
  - `q`: nombre de ciudad (ej. `q=Buenos Aires`).
- **200:** JSON normalizado: `city`, `country`, `tempC`, `feelsLikeC`, `description`, `icon`.
- **400:** parámetros inválidos o faltantes — cuerpo `{ "status": 400, "message": "..." }`.
- **502:** error al hablar con el proveedor — mismo formato con `status` 502.
- **504:** timeout (8 s) hacia OpenWeather — mismo formato con `status` 504.

La API key no se expone al cliente; las respuestas de error son genéricas y no incluyen detalles del proveedor ni la clave.

## `.gitignore`

Se ignoran `node_modules`, `.env`, carpeta `logs` y archivos `*.log`.
