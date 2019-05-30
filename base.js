function hextodec(num){
	let result = 0n;
	let l = num.length;
    for(let i = 0; i < l; i++){
		let temp = 0n;
		temp = BigInt(Math.pow(16, l - 1 - i));
		temp = BigInt(parseInt(num.charAt(i), 	16)) * temp;
		result += temp;
    }
	return result;
}
