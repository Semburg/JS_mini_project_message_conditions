function sendMessage(){
    let mess = document.getElementById("messageText").value
    let doc = document.getElementById("sentText").innerHTML;


//?    any other method for that?   null/ undefined/ empty was not working
    if (mess.length == 0){
        document.getElementById("sentText").innerHTML = ""
        document.getElementById("emptyField").innerHTML = "Gib Nachricht ein!"
    } else {
        document.getElementById("emptyField").innerHTML = ""
        document.getElementById("sentText").innerHTML = mess
    }
}