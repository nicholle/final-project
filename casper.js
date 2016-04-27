var but1 = document.getElementById('lightbulb');

var ghost=document.getElementsByClassName("casper");



function move(){
	var ran= Math.floor(Math.random()*5);
	var casper = document.getElementById("casper");
	var shadow = document.getElementById("shadow");
	console.log(ran);
	if (ran==0){
		casper.className = "casper2";
		shadow.className = "shadow2";
		
		
		}else if (ran==1){
		casper.className = "casper3";
		shadow.className = "shadow3";

		}else if (ran==2){
		casper.className = "casper4";
		shadow.className = "shadow4";

		}else if (ran==3){
		casper.className = "casper5";
		shadow.className = "shadow5";
		
		}else if (ran==4){
		casper.className = "casper6";
		shadow.className = "shadow6";
		}

}

but1.addEventListener("click", move);
