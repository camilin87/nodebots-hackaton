module.exports = function(){
    var status = {
        count: 0,
        max: 0
    };

    return {
        init: function(max){
            status.max = max;
            status.count = 0;

            status.greenEnd = (max / 2);
            status.yellowEnd = (max * 0.9);
        },
        currentCount: function(){
            return status.count;
        },
        currentColor: function(){
            if (status.count < status.greenEnd){
                return 'green';
            }

            if (status.count < status.yellowEnd){
                return 'yellow';
            }

            return 'red';
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