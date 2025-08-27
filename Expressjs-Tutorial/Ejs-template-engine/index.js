const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let sitename = "Apple";
  let searchtext = "Search Now";
  let arr = [1, 54, 65];
  res.render("index", {
    sitename: sitename,
    searchtext: searchtext,
    arr,
  });
});

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "Is Apple is scam?";
  let blogContent = "Yes, Apple is scam!";
  res.render("blogpost", {
    blogTitle: blogTitle,
    blogContent: blogContent,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
