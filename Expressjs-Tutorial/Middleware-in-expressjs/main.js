const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const blogs = require("./routes/blog");

app.use(express.static("public"));

app.use("/blogs", blogs);

// Middleware 1 - Logger for our app

app.use((req, res, next) => {
  console.log("m1");
  console.log(req.headers);
  req.samad = "I am samad";
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`);
  console.log(`${Date.now()} is a ${req.method}`);
  //   res.send("Hacked by middleware 1")
  next();
});

// Middleware 2
app.use((req, res, next) => {
  console.log("m2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!" + req.samad);
});
app.get("/about", (req, res) => {
  res.send("Hello about!");
});
app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
