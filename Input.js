var firstname = prompt("Enter your first name");
var lastname = prompt("Enter your last name");
var birthyear = prompt("Enter your birth year");
var age=2025-parseInt(birthyear);
var output=("Hello " + firstname + " " + lastname + "! " + "How does it feel to be " + age + " years old?");

document.getElementById("message").innerHTML=output;