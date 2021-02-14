var btnTranslate= document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-area");

console.log(txtInput); 

function clickHandler(){

    console.log("Clicked");
    console.log("input",txtInput.value); 
}

btnTranslate.addEventListener("click", clickHandler);
//here "click" is tellling name of event and then calling function