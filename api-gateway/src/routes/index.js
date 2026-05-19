const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "AgriSync API Running",
  });
});

router.post("/auth/login", (req, res) => {
  res.json({
    success: true,
    token: "mock-jwt-token",
    user: {
      name: "Manish",
      role: "farmer",
    },
  });
});

router.post("/auth/register", (req, res) => {
  res.json({
    success: true,
    message: "User Registered",
  });
});

router.get("/farmers/lands", (req, res) => {
  res.json([
    {
      id: 1,
      name: "North Field",
      acres: 5,
    },
  ]);
});

router.get("/analytics", (req, res) => {
  res.json({
    annualProfit: "₹4.2L",
    sustainability: "88%",
  });
});

module.exports = router;