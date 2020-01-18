const express = require("express");

const app = express();

const port = process.env.PORT || "8855"

app.use(express.static("project"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/project/landing.html");
})

app.get("/dashboard", (req, res) => {
    res.sendFile(__dirname + "/project/index.html")
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/project/login.html")
})

app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/project/signup.html")
})

app.get("/profile", (req, res) => {
    res.sendFile(__dirname + "/project/profile.html")
})

app.get("/support", (req, res) => {
    res.sendFile(__dirname + "/project/support.html")
})

app.get("/new-transaction", (req, res) => {
    res.sendFile(__dirname + "/project/new_trans.html")
})

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/project/landing.html")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});