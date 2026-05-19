const express = require("express");

const cors = require("cors");

const helmet = require("helmet");

const morgan = require("morgan");

const {
  createProxyMiddleware,
} = require("http-proxy-middleware");

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:5001",
    changeOrigin: true,
    pathRewrite: {
      "^/auth": "",
    },
  })
);

app.use(
  "/farmers",
  createProxyMiddleware({
    target: "http://localhost:5002",
    changeOrigin: true,
    pathRewrite: {
      "^/farmers": "",
    },
  })
);

app.use(
  "/analytics",
  createProxyMiddleware({
    target: "http://localhost:5003",
    changeOrigin: true,
    pathRewrite: {
      "^/analytics": "",
    },
  })
);

app.use(
  "/ai",
  createProxyMiddleware({
    target: "http://localhost:5004",
    changeOrigin: true,
    pathRewrite: {
      "^/ai": "",
    },
  })
);
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`API Gateway running on ${PORT}`);
});