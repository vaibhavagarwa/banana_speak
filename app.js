var btnTranslate= document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-area");
var outputDiv = document.querySelector("#output");

//outputDiv.innerText="Here your output will appear";
//or by directly writing in div tag in html



function clickHandler(){

    // console.log("Clicked");
    // console.log("input",txtInput.value); 

    outputDiv.innerText = "dkjksdb " + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler);
//here "click" is tellling name of event and then calling function

//console.log(outputDiv);