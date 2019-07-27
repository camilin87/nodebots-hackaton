var five = require("johnny-five");
var pins = require("./esp8266Pins");
var board = new five.Board();

var express = require('express');
var app = express();
var port = 3000;

board.on('ready', function() {
    console.log('Board Ready');

    var ledRed = new five.Led(pins.d3);
    var ledWhite = new five.Led(pins.d2);
    var ledGreen = new five.Led(pins.d4);
    var ledBlue = new five.Led(pins.d1);
    var ledBigRed = new five.Led(pins.d7);

    var allLeds = [
        ledRed, ledWhite, ledGreen, ledBlue, ledBigRed
    ];

    var ledStatus = true;

    app.get('/', function(req, res){
        if (ledStatus){
            ledRed.off();
            ledStatus = false;
        } else {
            ledRed.on();
            ledStatus = true;
        }

        res.send('Hello World!');
    });

    app.listen(port, function(){
        console.log('API Ready');
    });
});
