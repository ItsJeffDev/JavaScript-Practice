let num = 0;
function myFunctAdd(){
	num += 1;
	if (num <= 0){
		num = 0
	}
	document.getElementById('text').innerHTML = num;
}
function myFunctMin(){
	num -= 1;
	if (num <= 0){
		num = 0
	}
	document.getElementById('text').innerHTML = num;
}

function myFunctDe(){
	num = 0
	document.getElementById('text').innerHTML = num;
}