function genPrimeNum(){
	while(true){
		var rand = Math.round(Math.random() * 1000);
		if(isPrime(rand)){
		return rand;
        	}
    	}
}

function isPrime(num){
	if(num < 2){
		return false;
    	}else if(num == 2){
		return true;
   	 }else if(num % 2 == 0){
		return false;
   	 }

	var sqr = Math.round(Math.sqrt(num));
	for(var i = 2; i <= sqr; i++){
		if(num % i == 0){
		return false;
        }
    	}
	return true;
}
