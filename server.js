const express = require('express');
var app = express();

app.use(function (request, response, next) {

    console.log(`Time ${Date.now()}`);

    console.log(request.path);

    next()
})

// app.get('/', function (request, response) {
//     response.send('Hello :]');
// });

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/public/mkamran67.github.io/index.html');
});

app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/js'))

var port = process.argv[2] || 80;

app.listen(port, function () {
    console.log(`Listening on ${port}`);
});