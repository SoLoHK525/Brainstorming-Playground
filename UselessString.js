function cap(str){
	let outputstr = ""
	for(let i = 0; i < str.length; i++){
		let boolean = Math.round(Math.random()) > 0.5;
		outputstr += (boolean) ? str.charAt(i).toUpperCase() : str.charAt(i).toLowerCase();
    }
	return outputstr;
}

function discordBigText(str){
    let result = "";
    for(s in str){
        let word = str[s];
        if(/[a-zA-Z]/.test(word)){
           result += `:regional_indicator_${word.toLowerCase()}: `;
        }else if(word == " "){
           result += "          ";
        }
    }
    return result;
}
