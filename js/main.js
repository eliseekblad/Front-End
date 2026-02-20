const redButton = document.getElementById("red-button");
const blueButton = document.getElementById("blue-button");
const greenButton = document.getElementById("green-button");
const bodyElement = document.querySelector("body");

redButton.addEventListener("click", function (event){
    bodyElement.style.backgroundColor ="#ff0000" ;
});