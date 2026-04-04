# InfoHub Backend

API Express (Node). Base sin lógica de negocio; punto de entrada en la raíz, código de aplicación en `src/`.

## Requisitos

- **Node.js 20+** (LTS recomendado; ver `engines` en `package.json`).

## Variables de entorno

1. Copia `.env.example` a `.env`.
2. Ajusta `PORT` u `NODE_ENV` si lo necesitas.
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
| `src/modules/` | Módulos de dominio (rutas, servicios) cuando los añadas. |

## `.gitignore`

Se ignoran `node_modules`, `.env`, carpeta `logs` y archivos `*.log`.
