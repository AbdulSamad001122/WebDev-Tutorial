const express = require("express");
const router = express.Router();
const fs = require("fs");


// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log("blogs middleware")
  fs.appendFileSync("logs-blogs.txt", `${Date.now()} is a ${req.method}\n`);
  console.log("Time: ", Date.now());
  next();
};
router.use(timeLog);

// define the home page route
router.get("/", (req, res) => {
  res.send("Blogs home page");
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About Blogs");
});

module.exports = router;
