var toyotas= ["camry", "Prius"];
var porsches= ["camero", "boxer"];
car cars= ["toyotas", "porsches"];

if(5>10){
	console.log("You'll never see this in the console because it's greater than 10");
}
if (5<10){
	console.log("You'll definitely see this");
}

function pickADoor(doorNumber){
	doorNumber = parseInt(doorNumber) -1;
	var prizes = ["A new car", "A fishing pole", "An old shoe"];
	if (prizes[doorNumber]) {
		return prizes[doorNumber];
	}else //error
	return"Oops, you picked an invaild number
	}	
}