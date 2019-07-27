// POC to start understanding how to manage the led statuses

var five = require("johnny-five");
var pins = require("./esp8266Pins");
var board = new five.Board();

board.on("ready", function() {
    console.log("READY!");

    var ledRed = new five.Led(pins.d3);
    var ledWhite = new five.Led(pins.d2);
    var ledGreen = new five.Led(pins.d4);
    var ledBlue = new five.Led(pins.d1);
    var ledBigRed = new five.Led(pins.d7);

    

    ledRed.blink(500);
    ledWhite.blink(700);
    ledGreen.blink(1000);

    ledBlue.blink(2000);

    ledBigRed.blink(3000);

    console.log("IT'S BLINKING!!!");
});
