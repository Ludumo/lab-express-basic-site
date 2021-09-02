const { request, response } = require('express');
const express = require('express');
const app = express();

app.use(express.static('public'));

const port = 5000;

// ...
// our first Route:
app.get('/home', (request, response, next) => 
response.sendFile(__dirname + '/views/home-page.html'));

// artist route:
app.get('/artist', (request, response, next) =>
 response.sendFile(__dirname + '/views/artist-page.html'));

// about route:
/* app.get('/about', (request, response, next) =>
 response.sendFile(__dirname + '/views/about-page.html')); */


app.listen(port, function () {
    console.log(`Server listening on port ${port}`)
});

