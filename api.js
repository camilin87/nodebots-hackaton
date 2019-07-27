var five = require('johnny-five');
var apiLeds = require('./apiLeds');
var ledHelper = require('./ledHelper');
var status = require('./statusHelper')();
var board = new five.Board();

var express = require('express');
var app = express();

board.on('ready', function() {
    console.log('Board Ready');
    var leds = apiLeds.init(five);
    ledHelper.flashAll(leds.all);

    status.init(10);

    app.get('/', function(req, res){
        ledHelper.flash(leds.red);

        res.send('Hello World!');
    });

    app.post('/api/add', function(req, res){
        ledHelper.flash(leds.blue);

        var currentCount = status.increment();
        //TODO update status

        res.status(200).send(`${currentCount}`);
    });

    app.post('/api/remove', function(req, res){
        ledHelper.flash(leds.bigRed);

        var currentCount = status.decrement();
        //TODO update status

        res.status(200).send(`${currentCount}`);
    });

    app.listen(3000, function(){
        console.log('API Ready');
    });
});
