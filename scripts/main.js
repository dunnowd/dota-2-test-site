var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc =myImage.getAttribute("src");

    if(mySrc === "images/Dota-2-Logo.png") {
        myImage.setAttribute("src", "images/d2meme.jpg");
    } else {
        myImage.setAttribute("src", "images/Dota-2-Logo.png");
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome to dota, "+myName;
}

 if(!localStorage.getItem("name")){
    setUserName();
 } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome to dota, " + storedName;
 }

 myButton.onclick = function() {
    setUserName();
 }
