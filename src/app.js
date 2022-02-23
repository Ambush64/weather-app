const express = require("express");
const app = express();
// creating an environment variable
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require("hbs");

// static path
const staticPath = path.join(__dirname, "../public/");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// set view engine
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

// static website render
app.use(express.static(staticPath));

// routing
app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "Oops page not found!",
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
