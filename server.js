var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');



var app = express();


app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/dist/public'));
//require('./server/config/routes')(app)

app.listen(1112, function(){
    console.log('Listening on port 1112');
})