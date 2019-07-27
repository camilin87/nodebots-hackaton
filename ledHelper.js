module.exports = {
    flash: function(led){
        led.off();
        led.on();

        setTimeout(function(){
            led.off();
        }, 500)
    }
}