// import express from "express";
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const rootDir = require("./util/path");
const adminData = require("./routes/admin");
const shopData = require("./routes/shop");

// to serve static files such as images, CSS files, and JavaScript files
app.use(express.static(path.join(rootDir, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.set("views", "views");

app.use("/admin", adminData.routes);
app.use("/", shopData.routes);

app.use((req, res, next) => {
  res
    .status(404)
    .render("404", { message: "Page not found!", pageTitle: "Page Not Found" });
});

app.listen(3000);
