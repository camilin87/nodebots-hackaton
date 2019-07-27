module.exports = {
    flash: function(led){
        led.off();
        led.on();

        setTimeout(function(){
            led.off();
        }, 500)
    },
    flashAll: function(leds){
        leds.forEach(l => this.flash(l));
    },
    allOn: function(leds){
        leds.forEach(l => l.on());
    },
    allOff: function(leds){
        leds.forEach(l => l.off());
    }
}