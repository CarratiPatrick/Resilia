function validaEmail() {
    var email = prompt("entre seu email")
    while (true) {
        if (email.indexOf("@") > -1 && email.indexOf("." > -1 )) {
            alert("email valido")
            break
        }else{
            alerte("email invalido")
            email = prompt("entre seu email")
        }
    }
    
}