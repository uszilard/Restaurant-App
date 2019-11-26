var express = require('express');
var path = require('path');

var app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, function () {

    console.log("Server listening on: http://localhost:" + PORT);
})