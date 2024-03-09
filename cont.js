//get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelector(".error");

//Validate data
function validateForm() {

    clearMessage();

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
    }
    
    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid Email Adress";
        email.classList.add("error-border");
    }
}

function clearMessage(){
    for(let i=0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove(error-border);
}
function emailIsValid(email){

}
function button(){
    if(nameInput = 0){
        errorNodes[0].innerText="Name Can't be Blank";
        nameInput.classList.add("error-border");
    }
}