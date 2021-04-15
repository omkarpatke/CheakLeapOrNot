var button = document.querySelector("#check-btn");
var txtInput = document.querySelector("#get");
var outputDiv = document.querySelector("#output");


console.log(txtInput)

function clickHandler() {
    console.log("input", txtInput.value);

}



button.addEventListener("input", clickHandler);