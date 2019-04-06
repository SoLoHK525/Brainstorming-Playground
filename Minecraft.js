function minecraftColor(string){
	var output = "";
	var color = new Array();
	color[0] = "4";
	color[1] = "c";
	color[2] = "6";
	color[3] = "e";
	color[4] = "2";
	color[5] = "a";
	color[6] = "b";
    color[7] = "3";
	color[8] = "1";
	color[9] = "9";
	color[10] = "d";
	color[11] = "5";
	string = string.trim();
	var i = 0;
	var j = 0;
	while(i < string.length){
		if(string.charAt(i) == " "){
			output += " ";
			i++;
			continue;
        }

		if((j != 1) && (j%11) == 1){
			color.reverse();
        }
		output += "&" + color[(j%11)] + string.charAt(i);
		i++;
		j++;
    }
	return output;
}
