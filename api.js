var five = require('johnny-five');
var apiLeds = require('./apiLeds');
var board = new five.Board();

var express = require('express');
var app = express();

board.on('ready', function() {
    console.log('Board Ready');

    var leds = apiLeds.init(five);

    var ledStatus = true;

    app.get('/', function(req, res){
        if (ledStatus){
            leds.ledRed.off();
            ledStatus = false;
        } else {
            leds.ledRed.on();
            ledStatus = true;
        }

        res.send('Hello World!');
    });

    app.listen(3000, function(){
        console.log('API Ready');
    });
});
