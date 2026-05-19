const express = require("express");

const cors = require("cors");

const helmet = require("helmet");

const morgan = require("morgan");

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.get("/lands", (req, res) => {
  res.json([
    {
      id: 1,
      name: "North Field",
      acres: 5,
      soil: "Black Soil",
    },
  ]);
});

const PORT = 5002;

app.listen(PORT, () => {
  console.log(`Farmer Service running on ${PORT}`);
});