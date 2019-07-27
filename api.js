var five = require('johnny-five');
var apiLeds = require('./apiLeds');
var ledHelper = require('./ledHelper');
var board = new five.Board();

var express = require('express');
var app = express();

board.on('ready', function() {
    console.log('Board Ready');
    var leds = apiLeds.init(five);
    ledHelper.flashAll(leds.all);

    app.get('/', function(req, res){
        ledHelper.flash(leds.red);

        res.send('Hello World!');
    });

    app.post('/api/add', function(req, res){
        ledHelper.flash(leds.blue);

        //TODO increment counter
        //TODO update status

        res.send('');
    });

    app.post('/api/remove', function(req, res){
        ledHelper.flash(leds.bigRed);

        //TODO decrement counter
        //TODO update status

        res.send('');
    });

    app.listen(3000, function(){
        console.log('API Ready');
    });
});
