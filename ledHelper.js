module.exports = {
    flash: function(led){
        led.off();
        led.on();

        setTimeout(function(){
            led.off();
        }, 500)
    },
    flashAll: function(leds){
        for (var i = leds.length - 1; i >= 0; i--) {
            this.flash(leds[i]);
        }
    },
    allOn: function(leds){
        for (var i = leds.length - 1; i >= 0; i--) {
            leds[i].on();
        }
    },
    allOff: function(leds){
        for (var i = leds.length - 1; i >= 0; i--) {
            leds[i].off();
        }
    }
}