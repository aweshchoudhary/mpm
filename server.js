const express = require("express");
const app = express();
const port = process.env.port || 80;
const ejs = require("ejs");
const layouts = require("express-ejs-layouts");
const path = require("path");
const routes = require("./routes/main");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/static")));
app.set("view engine", "ejs");
app.use(layouts);

app.use(routes);

app.listen(port, () => console.log(`Server is started on port ${port}`));
