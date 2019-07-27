var pins = require("./esp8266Pins");

module.exports = {
    init: function(five){
        var ledRed = new five.Led(pins.d3);
        var ledWhite = new five.Led(pins.d2);
        var ledGreen = new five.Led(pins.d4);
        var ledBlue = new five.Led(pins.d1);
        var ledBigRed = new five.Led(pins.d7);

        return {
            ledRed: ledRed,
            ledWhite: ledWhite,
            ledGreen: ledGreen,
            ledBlue: ledBlue,
            ledBigRed: ledBigRed,
            allLeds: [
                ledRed, ledWhite, ledGreen, ledBlue, ledBigRed
            ]
        };
    }
};
