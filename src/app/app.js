const express = require("express");
const app = express();
const morgan = require ("morgan");

const routerProduct = require("../router/product-router");
const routerCombo = require("../router/combo-router");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", function (req, res) {
    res.send(`Hello world`)
});

app.use(express.json())
app.use("/api/v1", routerProduct);
app.use("/api/v1", routerCombo);



module.exports = app;
