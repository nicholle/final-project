var but1 = document.getElementById('circle');
var but2 = document.getElementById('circle1');
var but3 = document.getElementById('circle2');
var but4 = document.getElementById('circle3');
var but5 = document.getElementById('circle4');

var ghost = document.getElementById('casper');



function leftRoll(){
	ghost.className = "casper0";
}

function slideExpandDown(){
	ghost.className = "casper1";
}

function twisterDown(){
	ghost.className = "casper2";
}

function spaceOutUp(){
	ghost.className = "casper4";
}

function puffOut(){
	ghost.className = "casper5";
}



but1.addEventListener("click", spaceOutUp);
but2.addEventListener("click", leftRoll);
but3.addEventListener("click", slideExpandDown);
but4.addEventListener("click", twisterDown);
but5.addEventListener("click", puffOut);



