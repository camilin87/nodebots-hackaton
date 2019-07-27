module.exports = function(){
    var status = {
        count: 0,
        max: 0
    };

    return {
        init: function(max){
            status.max = max;
            status.count = 0;
        },
        currentCount: function(){
            return status.count;
        },
        increment: function(){
            status.count += 1;
            return status.count;
        },
        decrement: function(){
            status.count -= 1;

            if(status.count < 0){
                status.count = 0;
            }

            return status.count;
        }
    }
}