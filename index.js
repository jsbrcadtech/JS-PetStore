//Required modules
const express = require("express");
const path = require("path");

//Express object and port
const app = express();
const port = process.env.PORT || "8888";

// Paths to important folders and/or files
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname,"public")))

//GET request on the root page ("/") - Load on the homePage
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});
app.get("/sale", (req, res) => {
    res.render("sale", { title: "Sale" });
});
app.get("/about", (req, res) => {
    res.render("about", { title: "About us" });
});

//server listenner
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`); //${port} is called template literal with ` backwards quotes


});


