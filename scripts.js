var counter = 0;
var counterupgrade = 1;
var updatepersecond = 1000;
var goldpersecond = 0;


function klick() {

	counter = counter + counterupgrade;
	document.getElementById("showcounter").innerHTML = "counter: " + counter;
}

function update() {
	//Todo
	//alles was pro Sekunde gemacht werden muss
	counter = counter + goldpersecond;
	document.getElementById("showcounter").innerHTML = "counter: " + counter;
	document.getElementById("showgps").innerHTML = "gold per second: " + goldpersecond;	
}


 function startup() {
 	//TODO
 	//für spätere Dinge die direkt beim Start ausgeführt werden sollen
 	//Spielstand laden etc
 }

function upgrade1() {
	goldpersecond = goldpersecond + 1;
}

var loop = window.setInterval(function(){
	update();
},updatepersecond)