var path = require('path')
var request = require('request')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var jsonParser = bodyParser.json();

app.use(express.static(path.resolve(__dirname, './UI')));

app.get('/coolbeans', jsonParser, function (req, res) {
    request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body);
    res.json({
        key: 'value'
    })

});
})

app.listen(3000)