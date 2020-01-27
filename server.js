const express = require("express");
const pug = require("pug");
const cors = require("cors");

const app = express();

app.use(cors());

const port = process.env.PORT || "8855";

app.use(express.static("project"));

app.get("/", (req, res) => {
  res.send(pug.renderFile("project/landing.pug"));
});

app.get("/dashboard", (req, res) => {
  res.send(pug.renderFile("project/new-trans.pug"));
});

app.get("/login", (req, res) => {
  res.send(pug.renderFile("project/login.pug"));
});

app.get("/signup", (req, res) => {
  res.send(pug.renderFile("project/signup.pug"));
});

app.get("/profile", (req, res) => {
  //   res.sendFile(__dirname + "/project/profile.html");
  res.send(pug.renderFile("project/profile.pug"));
  // res.send("hello profile")
});

app.get("/support", (req, res) => {
  res.send(pug.renderFile("project/support.pug"));
});

app.get("/success", (req, res) => {
  res.send(pug.renderFile("project/success.pug"));
});

app.get("/new-transaction", (req, res) => {
  res.send(pug.renderFile("project/new-trans.pug"));
});

app.get("*", (req, res) => {
  res.send(pug.renderFile("project/landing.pug"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
