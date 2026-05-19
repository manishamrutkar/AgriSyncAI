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
    annualProfit: "₹4.2L",
    sustainability: "88%",
  });
});

const PORT = 5003;

app.listen(PORT, () => {
  console.log(`Analytics Service running on ${PORT}`);
});