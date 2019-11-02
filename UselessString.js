function cap(str){
	let outputstr = ""
	for(let i = 0; i < str.length; i++){
		let boolean = Math.round(Math.random()) > 0.5;
		outputstr += (boolean) ? str.charAt(i).toUpperCase() : str.charAt(i).toLowerCase();
    }
	return outputstr;
}
