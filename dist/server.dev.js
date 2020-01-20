"use strict";

var express = require("express");

var pug = require("pug");

var cors = require("cors");

var app = express();
app.use(cors());
var port = process.env.PORT || "8855";
app.use(express["static"]("project"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/project/landing.html");
});
app.get("/dashboard", function (req, res) {
  res.sendFile(__dirname + "/project/index.html");
});
app.get("/login", function (req, res) {
  res.send(pug.renderFile("project/login.pug"));
});
app.get("/signup", function (req, res) {
  res.send(pug.renderFile("project/signup.pug"));
});
app.get("/profile", function (req, res) {
  //   res.sendFile(__dirname + "/project/profile.html");
  res.send(pug.renderFile("project/profile.pug")); // res.send("hello profile")
});
app.get("/support", function (req, res) {
  res.send(pug.renderFile("project/support.pug"));
});
app.get("/new-transaction", function (req, res) {
  res.send(pug.renderFile("project/new-trans.pug"));
});
app.get("*", function (req, res) {
  res.send(pug.renderFile("project/landing.pug"));
});
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});