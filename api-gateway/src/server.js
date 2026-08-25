const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const {
  createProxyMiddleware,
} = require("http-proxy-middleware");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(helmet());

app.use(morgan("combined"));

app.use(express.json());

/*
|--------------------------------------------------------------------------
| HEALTH CHECK
|--------------------------------------------------------------------------
*/

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "AgriSync API Gateway",
    timestamp: new Date().toISOString(),
  });
});

/*
|--------------------------------------------------------------------------
| SERVICE URLS
|--------------------------------------------------------------------------
|
| Local development:
|   AUTH_SERVICE_URL=http://localhost:5001
|   FARMER_SERVICE_URL=http://localhost:5002
|   ANALYTICS_SERVICE_URL=http://localhost:5003
|   AI_SERVICE_URL=http://localhost:5004
|
| Render:
|   These will be replaced with the deployed service URLs.
|
|--------------------------------------------------------------------------
*/

const AUTH_SERVICE_URL =
  process.env.AUTH_SERVICE_URL ||
  "http://localhost:5001";

const FARMER_SERVICE_URL =
  process.env.FARMER_SERVICE_URL ||
  "http://localhost:5002";

const ANALYTICS_SERVICE_URL =
  process.env.ANALYTICS_SERVICE_URL ||
  "http://localhost:5003";

const AI_SERVICE_URL =
  process.env.AI_SERVICE_URL ||
  "http://localhost:5004";

/*
|--------------------------------------------------------------------------
| AUTH SERVICE
|--------------------------------------------------------------------------
*/

app.use(
  "/auth",
  createProxyMiddleware({
    target: AUTH_SERVICE_URL,
    changeOrigin: true,

    pathRewrite: {
      "^/auth": "",
    },
  })
);

/*
|--------------------------------------------------------------------------
| FARMER SERVICE
|--------------------------------------------------------------------------
*/

app.use(
  "/farmers",
  createProxyMiddleware({
    target: FARMER_SERVICE_URL,
    changeOrigin: true,

    pathRewrite: {
      "^/farmers": "",
    },
  })
);

/*
|--------------------------------------------------------------------------
| ANALYTICS SERVICE
|--------------------------------------------------------------------------
*/

app.use(
  "/analytics",
  createProxyMiddleware({
    target: ANALYTICS_SERVICE_URL,
    changeOrigin: true,

    pathRewrite: {
      "^/analytics": "",
    },
  })
);

/*
|--------------------------------------------------------------------------
| AI SERVICE
|--------------------------------------------------------------------------
*/

app.use(
  "/ai",
  createProxyMiddleware({
    target: AI_SERVICE_URL,
    changeOrigin: true,

    pathRewrite: {
      "^/ai": "",
    },
  })
);

/*
|--------------------------------------------------------------------------
| ROOT
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.json({
    message: "AgriSync AI API Gateway",
    status: "running",
    version: "1.0.0",
  });
});

/*
|--------------------------------------------------------------------------
| ERROR HANDLER
|--------------------------------------------------------------------------
*/

app.use((err, req, res, next) => {
  console.error("Gateway Error:", err);

  res.status(500).json({
    message: "API Gateway error",
  });
});

/*
|--------------------------------------------------------------------------
| SERVER
|--------------------------------------------------------------------------
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `API Gateway running on port ${PORT}`
  );
});