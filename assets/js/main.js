

function sendMessage() {
    let mess = document.getElementById("messageText").value
    var doc = document.getElementById("sentText");
    var errorMessage = document.getElementById("emptyField");


    //?    any other method for first "if"?   null/ undefined/ empty was not working
    if (mess.length == 0) {
        doc.innerHTML = "";
        errorMessage.innerHTML = "Gib Nachricht ein!"
    } else {
        errorMessage.innerHTML = ""
        doc.innerHTML = mess;
    }
}

// *      On Enter Click in form:text.   usability etc...
function onEnter(event){
    var code = 0;
    code = event.keyCode;
    if(code==13){
        sendMessage();
        event.preventDefault();
    }
}
