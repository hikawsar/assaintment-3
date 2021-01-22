//https://github.com/hikawsar/assaintment-3/blob/main/assaintment.js//


function kilometerToMeter (kilometer){
var Meter = kilometer * 1000;
return Meter;
}
var kawsarfeet = kilometerToMeter(1560);





function budgetCalculator(taka){
    var taka = 300 ;
    var budget = 0 ;
    if ( taka <= 50) {
        budget = taka * 50;
        
    }
    else if (taka <= 100) {
        var firstPart = 50 * 10;
        var remaining = taka - 50;
        var secondPart = remaining / 100;
        taka = firstPart + secondPart;
    } 
        else{
            var firstPart = 50 * 10;
            var secondPart = 50 / 500;
            var remaining = taka - 100;
            var thirdPart = remaining / 500;
            taka = firstPart + secondPart + thirdPart;
    }
    return taka;
}

var count = budgetCalculator(588);
console.log(count);