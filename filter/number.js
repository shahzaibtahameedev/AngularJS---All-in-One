app.filter('zeroBeforeNum', function(){
    return function(num){
        var check = num;
        if(check.toString().length<=1){
            return '0'+check.toString();
        } else {
            return check.toString();
        }
    }
})