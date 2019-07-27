var five = require("johnny-five");
var pins = require("./esp8266Pins");
var board = new five.Board();

board.on("ready", function() {
    console.log("READY!");

    //TODO: init api
});
