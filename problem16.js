var getDigits = function(power) {
    var digits = [];
    digits[0] = 1;
    while (power > 0) {
        for (var i = digits.length-1; i >= 0; i--) {
            digits[i] *= 2;
            if (digits[i] > 9) {
                digits[i] -= 10;
                digits[i+1] = digits[i+1] || 0;
                digits[i+1] += 1;
            }
        }
        power--;
    }

    return digits;
};

var getSum = function(power){
    var digits = getDigits(power);
    var sum = 0;
    for(var i = digits.length - 1; i >= 0; i--){
        sum += digits[i];
    }
    return sum;
};

console.log(getSum(15));
console.log(getSum(1000));