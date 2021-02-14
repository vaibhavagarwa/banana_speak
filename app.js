var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-area");
var outputDiv = document.querySelector("#output");

//outputDiv.innerText="Here your output will appear";
//or by directly writing in div tag in html

//console.log("clecked");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"





function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
    //here ? and text= are needed as you saw by running in POSTMAN   
    // text in end is what you are getting from textarea 
    //serverURL is remaining API link
}

function errorHandler(error)
{
    console.log("error occured", error)
    alert("some issue with server, try after sometime")
}

function clickHandler() {

    // console.log("Clicked");
    // console.log("input",txtInput.value); 
    // outputDiv.innerText = "dkjksdb " + txtInput.value;

    var inputText = txtInput.value; //getting input value as did once before

    fetch(getTranslationURL(inputText)) //calling server for procesing
        .then(response => response.json())       //may be check this but it is predefined function to convert into json
        .then(json => console.log(json.contents.translated)) //here json is just paramerter name
        // see how I got contents.translated by see this console ->network tab of browser
        //earler when json=>console.log(json) only -> it giving all data
        // after words only getting translation

        //error handling if server is down
        .catch(erroHandler)
};

btnTranslate.addEventListener("click", clickHandler);
//here "click" is tellling name of event and then calling function
//not to use () with clickHandler it is treated as object there

//console.log(outputDiv);