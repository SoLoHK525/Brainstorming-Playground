function bubbleSorting(arr){
 	for(var i=0;i<arr.length;i++){
		for(var j=0;j<arr.length;j++){
			if(arr[j] > arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
            }
        }
    }   
	return arr;
}

function generateRandomArray(num){
	var arr = new Array();
	for(var i=0;i<num;i++){
		arr[i] = Math.round(Math.random()*1000);
    }
	return arr;
}
