var pins = require("./esp8266Pins");

module.exports = {
    init: function(five){
        var red = new five.Led(pins.d3);
        var yellow = new five.Led(pins.d2);
        var green = new five.Led(pins.d4);
        var blue = new five.Led(pins.d1);
        var bigRed = new five.Led(pins.d7);

        return {
            red: red,
            yellow: yellow,
            green: green,
            blue: blue,
            bigRed: bigRed,
            statusLeds: [
                red, yellow, green
            ],
            all: [
                red, yellow, green, blue, bigRed
            ]
        };
    }
};
