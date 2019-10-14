const express = require('express');
var app = express();

app.use(function (request, response, next) {

    console.log(`Time ${Date.now()}`);

    console.log(request.path);
    
    next()
})

app.get('/', function (request, response) {
    response.send('Hello, Aleena :]');
});

app.get('/hello', function (request, response) {
    response.sendFile(__dirname + '/public/resume.html');
});



var port =  process.argv[2] || 3000;

app.listen(port, function () {
    console.log(`Listening on ${port}`);
});

