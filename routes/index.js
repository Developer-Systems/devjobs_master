const express = require("express");
const router = express.Router();

module.exports  = () => {
  
  router.get("/", (req, res) => {
    res.send("<h2>Welcome to Express App<h2>");
  });
  return router;
};


