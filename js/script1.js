var inbox= ["none"];//inbox for messages
var i;

function messageText() {
 	'use strict';

    
	var newText;
    var sent= "Your message has been sent!"; //confirmation message
    var str = "//";//divider
	var name = document.getElementById('name').value;//assignes values
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
	
    newText = name.concat(str); //adds all data together to be saved in the array
    newText = newText.concat(email);
    newText = newText.concat(str);
    newText = newText.concat(message);
    inbox.push(newText);//puts data into the array
    document.getElementById("confirm").innerHTML = sent;//confirmation message is sent to show process worked
    console.log(inbox);//inbox content appears in the console
	return false;
} 

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = messageText;
} 

window.onload = init;


