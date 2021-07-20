require('dotenv').config()
var path = require('path')
const express = require('express')
const fetch = require('node-fetch');


const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {

    res.sendFile('dist/index.html')
})

const PORT = process.env.PORT
    // designates what port the app will listen to for incoming requests
app.listen(PORT, function() {
    console.log(`App is listening on port ${PORT}`)
})

//API get route
app.get('/api', function(req, res) {
    const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";

    // accessing the hidden API_KEY using apiKey
    const apiKey = process.env.API_KEY;
    const query = `&of=json&txt=${req.query.text}&model=general&lang=en`;

    fetch(baseURL + apiKey + query)
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(err => console.log(err));

})