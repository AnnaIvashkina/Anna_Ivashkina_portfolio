const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('home')
})

app.get("/ps", function (req, res) {
    res.render("ps");
});

app.get("/cooking", function (req, res) {
    res.render("cooking");
});

app.get("/drawing", function (req, res) {
    res.render("drawing");
});

app.get("/pets", function (req, res) {
    res.render("pets");
});

app.get("/projects", function (req, res) {
    res.render("projects");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started succesfully");
});
