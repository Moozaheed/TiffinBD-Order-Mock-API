const express = require("express");
const router = express.Router();
const tiffinData = require("../data/tiffin");

router.get("/", (req, res) => {
  res.json(tiffinData);
});

module.exports = router;
