const express = require('express');
var app = express();

app.get('/', function (request, response) {
    response.send('Hello');
});

app.get('/hello', function (request, response) {
    response.sendFile(__dirname + '/public/resume.html');
});

app.listen(3000);