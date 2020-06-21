function nthBinaryDigit(number,i){
	if((1 << i) > number){return -1;} //No such digit exists
	return (number & (1 << i) ) >> i;
}

function isBase2Palindromic(number){
	var start = 0;
	for(var i = 21; i >= 0; i--){
		if(!start&&nthBinaryDigit(number,i)==1){
			start = i; //Set index of highest digit
		}
		if(start){
			if(nthBinaryDigit(number,i) != nthBinaryDigit(number,start - i)){
				return false;
			}
		}
	}
	return true;
}

function isPalindromic(str){
	var start = 0;
	for(var i = 10; i >= 0; i--){
		if(!start&& typeof str[i]!=="undefined"){
			start = i; //Set index of highest digit
		}
		if(start){
			if(str[i] !== str[start - i]){
				return false;
			}
		}
	}
	return true;
}

var sum = 0;
for(var i = 0; i < 1000000; i++){
	if(isBase2Palindromic(i)&&isPalindromic(String(i))){
		sum += i;
		console.log(i);
	}
}

console.log(sum);