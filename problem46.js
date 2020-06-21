function isPrime(number){
	if(number <= 1){return false;}
	if(number == 2){return true;}
	if(!(number%2)){return false;}
	var maxCheck = Math.floor(Math.sqrt(number));
	for(var i = 3; i <= maxCheck; i+=2){
		if(!(number%i)){return false;}
	}
	return true;
}

//can be written as the sum of a prime and twice a square
function isGoldbach(number){

	for(var square = 1; 2*square*square < number; square++){
		if(isPrime(number - 2*square*square)){
			//console.log(number,number - 2*square*square,square);
			return true;
		}
	}
	return false;
}

for(var i = 9;;i+=2){
	if(!isPrime(i)){
		if(!isGoldbach(i)){
			console.log(i);
			break;
		}
	}
}