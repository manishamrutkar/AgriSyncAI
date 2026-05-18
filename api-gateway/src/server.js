const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API Gateway Running",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});