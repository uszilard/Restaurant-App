var express = require('express');
var path = require('path');

////////////////////////////////////
var app = express();
var PORT = 8080;

////////////////////////////////////
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

////////////////////////////////////
var tables = [
    {
        customerName: "Pablo",
        phoneNumber: "0123456789",
        customerEmail: "pablo@email.com",
        customerID: "1234"
    }
];

var waitlist = [
    {
        customerName: "Pablo",
        phoneNumber: "0123456789",
        customerEmail: "pablo@email.com",
        customerID: "1234"
    }
];

////////////////////////////////////
app.get("/", function (req, res) {
    console.log("hey i work")
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

////////////////////////////////////
app.get("/api/tables", function (req, res) {
    res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    res.json(waitlist);
});

////////////////////////////////////
app.post("/api/tables", function (req, res) {
    var newReservation = req.body



    if (tables.length >= 5) {
        waitlist.push(newReservation);

    } else {
        tables.push(newReservation)
    }

    res.json(newReservation);

});

////////////////////////////////////
app.listen(PORT, function () {

    console.log("Server listening on: http://localhost:" + PORT);
});