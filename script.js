function beavis() {
	var myobj = document.getElementById("btn");
		myobj.remove();

	var img = document.createElement('img'); 
    img.src = 'beavis.png'; 
    document.getElementById("box").appendChild(img);  
   	var h = document.createElement("h2") 
   	var txt = document.createTextNode("You are Beavis!");
   	var text = h.appendChild(txt);
   	document.getElementById("box").appendChild(h);
}

function butthead() {
	var myobj = document.getElementById("btn");
		myobj.remove();

	var img = document.createElement('img'); 
    img.src = 'butthead.png'; 
    document.getElementById("box").appendChild(img);  
   	var h = document.createElement("h2") 
   	var txt = document.createTextNode("You are Butt-Head!");
   	var text = h.appendChild(txt);
   	document.getElementById("box").appendChild(h);
}

function bob() {
var arr = [
	beavis,
	butthead
];

arr[Math.floor(Math.random() * arr.length)]();
}
