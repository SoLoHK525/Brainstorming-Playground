function minecraftColor(string){
	var output = "";
	var color = ["4", "c", "6", "e", "2", "a", "b", "3", "1", "9", "d", "5"];

	string = string.trim();
	var i = 0;
	var j = 0;
	while(i < string.length){
		if(string.charAt(i) == " "){
			output += " ";
			i++;
			continue;
        }

		if((j != 1) && (j%color.length) == 1){
			color.reverse();
        }
		output += "&" + color[(j%color.length)] + string.charAt(i);
		i++;
		j++;
    }
	return output;
}
