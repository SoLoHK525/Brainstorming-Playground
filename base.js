function hextodec(num){
	let result = 0;
	let l = num.length;
    for(let i = 0; i < l; i++){
		parseInt(num.charAt(l - 1 - i));
		result += parseInt(num.charAt(l - 1 - i), 	16) * Math.pow(16, i);
    }
	return result;
}
