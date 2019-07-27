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

    function displayStatus(status){
        var currentCount = status.currentCount();
        var currentColor = status.currentColor();
        ledHelper.allOff(leds.statusLeds);
        leds[currentColor].on();

        console.log(`Increment; count: ${currentCount}; color: ${currentColor}`);
    }
    displayStatus(status);
    setTimeout(function(){
        displayStatus(status);
    }, 600);

    app.use(express.static('frontend'));

    app.post('/api/add', function(req, res){
        console.log('Increment');
        ledHelper.flash(leds.blue);

        var currentCount = status.increment();
        displayStatus(status);

        res.status(200).send(`${currentCount}`);
    });

    app.post('/api/remove', function(req, res){
        console.log('Decrement');
        ledHelper.flash(leds.bigRed);

        var currentCount = status.decrement();
        displayStatus(status);

        res.status(200).send(`${currentCount}`);
    });

    app.listen(3000, function(){
        console.log('API Ready');
    });
});
