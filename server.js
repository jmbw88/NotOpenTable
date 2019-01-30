var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var reservations = [];

var waitList = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.get("/api/wait", function(req, res) {
    return res.json(waitList);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.post("/add", function(req, res) {
    var newreservation = req.body;

    newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newreservation);

    if (reservation.length >= 5) {
        waitList.push(newReservation);
    } else {
        reservations.push(newReservation);
    }


});